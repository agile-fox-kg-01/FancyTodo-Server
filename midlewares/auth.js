const { User, Todo } = require('../models/index')
const { verifyToken } =require('../helpers/jwt')

async function authentication(req,res,next){
    const token = req.headers.token

    if(!token){
        res.status(401).json({
            error: 'Silahkan Login terlebih dahulu'
        })
    } else {
        // Cek Token with JWT
        const payload = verifyToken(token)

        try {
            const user = await User.findOne({
                where: {
                    email:payload.email
                }
            })

            if(!user){
                res.status(401).json({
                    error: 'Silahkan Login terlebih dahulu'
                })
            } else {
                req.userLogin = user
                next()
            }
        } catch(err){
            res.status(500).json({
                error: 'Internal Server Error'
            })
        } 
    }
}

async function isOwner(req,res,next){
    const todoId = req.params.id

    try{
        const todo = await Todo.findByPk(todoId)
        if(!todo){
            res.status(404).json({
                error: 'Todo Not Found'
            })
        } else {
            if(todo.UserId !== req.userLogin.id){
                res.status(404).json({
                    error: 'Not Authorized'
                })
            } else {
                next()
            }
        }
    } catch(err){
        res.status(500).json({
            error: 'Invalid Server Error'
        })
    }
    

}

module.exports = {
    authentication,
    isOwner
}