const { User } = require('../models/index.js')
const { hashPassword, comparePassword } = require('../helpers/password.js')
const { jwtSign } = require('../helpers/jwt.js')

class UserController {

  static async register(req, res, next) {
    let user = req.body

    try {
      const registerData = await User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        date_of_birth: user.date_of_birth
      })
      res.status(201).json(registerData)
    } catch (err) {
      next(err)
    }

  }

  static async logIn(req, res, next) {
    let inputPassword = req.body.password

    try {
      const userLogin = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (userLogin) {
        let databasePassword = userLogin.password

        if (comparePassword(inputPassword, databasePassword)) {
          const payload = {
            email: userLogin.email
          }
          const token = jwtSign(payload)
          res.status(200).json({ token })
        } else {
          throw {
            name: 'Validation Error',
            message: `invalid password or email`
          }
        }
      } else {
        throw {
          name: 'Validation Error',
          message: `invalid password or email`
        }
      }
    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController