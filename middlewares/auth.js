const {User, Todo} = require('../models/index.js');
const {verifyToken} = require('../helpers/jwt.js');

async function authentication(req, res, next) {
    const token = req.headers.token;

    if(!token) {
        res.status(401).json({
            error: `You have to logged in first!`
        })
    } else {
        const payload = verifyToken(token);
        
        try {
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            });

            if(!user) {
                res.status(401).json({
                    error: `You have to logged in first`
                })
            } else {
                req.userLogin = user;

                next();
            }
        } catch(err) {
            res.status(500).json({
                error: `Internal Server Error`
            })
        }
    }
}

async function authorization(req, res, next) {
    const todoId = Number(req.params.id);

    try {
        const todo = await Todo.findByPk(todoId);
    
        if(!todo) {
            res.status(404).json({
                error: 'Todo not found'
            })
        } else {
            if(todo.UserId !== req.userLogin.id) {
                res.status(401).json({
                    error: 'Not Authorized'
                })
            } else {
                next();
            }
        }
    } catch(err) {
        res.status(500).json({
            error: 'Invalid server error'
        })
    }
}

module.exports = {authentication, authorization};