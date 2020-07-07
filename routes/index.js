const express = require('express');
const router = express.Router();

const ToDoRouter = require('./todo-routes.js')
const UserRouter = require('./user-route.js')

router.use('/todos', ToDoRouter)
router.use('/user', UserRouter)

module.exports = router;