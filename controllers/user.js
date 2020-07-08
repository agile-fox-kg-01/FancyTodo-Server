const { User } = require('../models/index')

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    // Login
    static async postLogin(req,res){
        // Dipake untuk compare password
        const inputPassword = req.body.password

        try {
            const user = await User.findOne({
                where : {
                    email : req.body.email
                }
            })
            const databasePassword = user ? user.password : ''
            // console.log(databasePassword)
            // console.log(user)
            if( !user ){
                throw 'invalid username and password'
            } else if(!comparePassword(inputPassword,databasePassword)){
                throw 'invalid username and password'
            } else {
                const payload = {
                    email: user.email
                }
                const token = signToken(payload)

                res.status(200).json(token)
            }


        } catch(err){
            res.status(500).json(err)
        }
    }

    // register
    static async postRegister(req,res){
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        }
        try{
            const user = await User.create(newUser)

            res.status(201).json(user)
        } catch(err){
            res.status(500).json(err)
        }
        
    }

    // Note : EMAIL BELUM UNIQ, PASSWORD BELUM DI VALIDATE LENGTH NYA
}

module.exports = UserController