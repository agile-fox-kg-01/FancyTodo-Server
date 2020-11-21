const { User } = require('../models/index')

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { verify } = require('../helpers/googleOauth')
const { sendEmail } = require('../helpers/mailgun')

class UserController {
    static async browse(req, res, next) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }

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
            } else if (!comparePassword(inputPassword, databasePassword)) {
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
        const { ...data } = req.body
        try {
            const user = await User.create(data)
            const payload = {
                email: user.email
            }
            const token = signToken(payload)
            sendEmail(user.email, `Thank you, for choosing us!`)
            res.status(201).json({
                token
            })
        } catch (err) {
            if (err.name === "SequelizeValidationError") {
                next({
                    name: 'ValidationError',
                    errors: err.errors[0].message
                })
            } else if (err.name === "SequelizeUniqueConstraintError") {
                next({
                    name: 'ValidationError',
                    errors: err.errors[0].message
                })
            } else {
                next(err)
            }
        }
    }
    static async oauthGoogle(req, res) {
        const google_token = req.headers.google_token
        
        try {
            const payload = await verify(google_token)
            const user = await User.findOne({where: {
                email: payload.email
            }})
            const newPayload = {
                email: payload.email
            }
            if (!user) {
                const newUser = {
                    username: payload.email,
                    email: payload.email,
                    password: process.env.DEFAULT_GOOGLEPASS
                }
                const createUser = await User.create(newUser)
                sendEmail(createUser.email, `Thank you , for choosing us!`)
                
                const token = signToken(newPayload)
                res.status(201).json({
                    token
                })
            } else {
                const token = signToken(newPayload)
                res.status(200).json({
                    token
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = UserController