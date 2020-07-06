const User = require('../models/index.js')
const { hashPassword, comparePassword } = require('../helpers/password.js')
const { jwtSign } = require('../helpers/jwt.js')

class UserController {

  static register(req, res) {

  }

  static logIn(req, res) {

  }

}

module.exports = UserController