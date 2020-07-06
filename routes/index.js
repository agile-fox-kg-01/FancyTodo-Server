const express = require('express');
const router = express.Router();

const ToDoRouter = require('./todo-router.js')

router.use('/todos', ToDoRouter)

module.exports = router;