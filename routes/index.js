const express = require('express')
const router = express.Router()
const todos = require('./todos.js')
const users = require('./users.js')
const apis = require('./apis.js')


router.use('/todos', todos)
router.use('/users', users)
router.use('/', apis)

module.exports = router