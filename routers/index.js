const express = require('express')
const router = express.Router()

const ToDo = require('./ToDo.js')

router.use('/todos', ToDo)

module.exports = router