const express = require('express')
const router = express.Router()

const ToDo = require('./ToDo.js')
const User = require('./user.js')

router.use('/todos', ToDo)
router.use('/user', User)

module.exports = router