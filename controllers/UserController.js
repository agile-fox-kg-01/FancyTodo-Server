const { User } = require('../models/index')

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static login(req, res) {
        const inputPassword = req.body.password
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            const databasePassword = user ? user.password : ''
            if(!user) {
                throw 'invalid username/password'
            }else if (!comparePassword(inputPassword, databasePassword)) {
                throw 'invalid username/password'
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
            console.log(err)
            res.status(500).json({
                err
            })
        })
    }
    static async register(req, res) {
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
            res.status(500).json({
                err
            })
        }
    }
}
module.exports = UserController