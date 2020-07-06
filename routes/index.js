const express = require('express');
const router = express.Router();

const ToDoRouter = require('./todo-routes.js')

router.use('/todos', ToDoRouter)

module.exports = router;