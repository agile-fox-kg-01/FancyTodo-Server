const { User, TodoList } = require('../models/index.js')
const { comparePassword } = require('../helpers/password.js')
const { jwtSign } = require('../helpers/jwt.js')
const { verify } = require('../helpers/googleAuth.js')

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
      if (registerData) {

        res.status(201).json(registerData)
      }
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
          const dataTodos = await TodoList.findAll({
            where: {
              UserId: userLogin.id
            }
          })
          res.status(200).json({ token, dataTodos })
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

  static async googleLogIn(req, res, next) {
    let google_token = req.headers.google_token
    try {
      const googleUser = await verify(google_token)
      const email = googleUser.email
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (user) {
        if (!comparePassword(process.env.GOOGLE_DEFAULT_BROWSER, user.password)) {
          User.create({
            first_name: googleUser.given_name,
            last_name: googleUser.family_name,
            email: email,
            password: process.env.GOOGLE_DEFAULT_BROWSER
          })
          const token = jwtSign(email)
          res.status(200).json({
            token
          })
        } else {
          const token = jwtSign(user.email)
          const dataTodos = await TodoList.findAll({
            where: {
              UserId: user.id
            }
          })
          res.status(200).json({
            token, dataTodos
          })
        }
      } else {
        User.create({
          first_name: googleUser.given_name,
          last_name: googleUser.family_name,
          email: email,
          password: process.env.GOOGLE_DEFAULT_BROWSER
        })
        const token = jwtSign(email)
        res.status(200).json({
          token
        })
      }
    } catch (error) {
      next(error)
    }

  }

}

module.exports = UserController