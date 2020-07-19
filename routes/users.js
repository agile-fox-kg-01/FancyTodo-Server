const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users.js')


router.post('/register', UserController.register)
router.post('/login', UserController.logIn)
router.post('/login/google', UserController.googleLogIn)


module.exports = router