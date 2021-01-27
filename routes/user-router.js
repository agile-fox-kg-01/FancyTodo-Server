const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { authentication, isAdmin } = require('../middlewares/auth')

router.get('/', authentication, UserController.browse)
router.post('/login', UserController.login)
router.post('/login/google', UserController.oauthGoogle)
router.post('/register', UserController.register)

module.exports = router