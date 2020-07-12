const { User, Todo } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')

async function authentication(req,res,next){
    const token = req.headers.token
    if(!token){
        throw { name: 'Not Authorized' }
    } else {        
        try {
            const payload = verifyToken(token)
            const user = await User.findOne({
                where: {
                    email:payload.email
                }
            })
            if(!user){
                throw { name: 'Email not valid' }
            } else {
                req.userLogin = user
                next()
            }
        } catch(err){
            next({
                name: err.name
            })
        } 
    }
}



async function isOwner(req,res,next){
    const todoId = req.params.id

    try{
        const todo = await Todo.findByPk(todoId)
        if(!todo){
            throw { name: 'Todo not found' }
        } else {
            if(todo.UserId !== req.userLogin.id){
                throw { name: 'Not Authorized'}
            } else {
                next()
            }
        }
    } catch(err){
        next({
            name: err.name
        })
    }
    

}

module.exports = {
    authentication,
    isOwner
}


























// async function authentication(req, res, next) {
    //     let token = req.headers.token
    //     if (token) {
    
    //         try {
    //             let payload = verifyToken(token)
    
    //             let currentUser = await User.findOne({
    //                 where: {
    //                     email: payload.email
    //                 }
    //             })
    
    //             // if (currentUser) {
    //             //     req.currentUser = currentUser
    //             //     next();
    //             // } else {
    //             //     req.status(401).json({
    //             //         error: 'Hi Ichlas'
    //             //     })
    //             //     // throw { name: "Unauthorized" }
    //             // }
    
    //         } catch (err) {
    //             console.log(err)
    //             throw { name: "Internal server error" }
    //         }
    
    //     } else {
    //         throw { name: "Unauthorized" }
    //     }
    // }