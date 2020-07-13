const express = require('express')
const router = express.Router()
const todoRoutes = require('./todo')
const userRoutes = require('./user')
const apiRoutes = require('./api')
router.use('/todos', todoRoutes)
router.use('/users', userRoutes)
router.use('/api', apiRoutes)
module.exports = router