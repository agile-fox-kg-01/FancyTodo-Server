const { User } = require('../models/index')

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static login(req, res, next) {
        const inputPassword = req.body.password
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            const databasePassword = user ? user.password : ''
            if(!user) {
                next({
                    name: 'ValidationError',
                    errors: 'invalid username/password'
                })
            }else if (!comparePassword(inputPassword, databasePassword)) {
                next({
                    name: 'ValidationError',
                    errors: 'invalid username/password'
                })
            } else {
                const payload = {
                    email: user.email
                }
                const token = signToken(payload)
                res.status(200).json({
                    token
                })
            }
        }).catch(err => {
            next(err)
        })
    }
    static async register(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const user = await User.create(newUser)
            res.status(201).json({
                user
            })
        } catch (err) {
            if (err.name === "SequelizeValidationError") {
                next({
                    name: 'ValidationError',
                    errors: err.errors[0].message
                })
            } else {
                next(err)
            }
        }
    }
}
module.exports = UserController