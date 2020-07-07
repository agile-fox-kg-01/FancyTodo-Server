const { verifyToken } = require('../helper/jwt');
const { User, Todo } = require('../models/index');

async function authentification (req, res, next) {

    // console.log(req.headers.token);

    const token = req.headers.token;

    if(!token) {
        next({
            name: `Unauthorized`,
            errors: {message: `Need to login first`}
        });
    }
    
    try {
        const payload = verifyToken(token)

        // console.log(payload)

        const user = await User.findOne({
            where: {
                email: payload.email
            }
        })

        // console.log(user, req.params)

        if (!user) { 
            next({
                name: `Unauthorized`,
                errors: {message: `Need to login first`}
            });
        } else {
            req.userLogin = user;
            next()
        }
    } catch (err) {
        
        // console.log(err)

        next(err);
    }
}

async function authorization (req, res, next) {
    const todoId = req.params.id

    // console.log(todoId)

    try {
        const todo = await Todo.findByPk(todoId);

        // console.log(todo.dataValues)

        if(!todo) {
            next({
                name: `NotFound`,
                errors: {message: `Not found`}
            });
        } else if(todo.UserId !== req.userLogin.id) {
            next({
                name: `Unauthorized`,
                errors: {message: `User not authorized`}
            });
        } else {
            // console.log(todo.dataValues)
            next()
        }

    } catch(err) {
        next(err);
    }
}

module.exports = {
    authentification,
    authorization
}