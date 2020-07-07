const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/todo')
const { authentication, isOwner} = require('../midlewares/auth')
router.post('/', authentication, TodoController.postTodo)
router.get('/' , authentication, TodoController.getTodo)
router.get('/:id', authentication, isOwner, TodoController.getTodoById)
router.put('/:id', authentication, isOwner, TodoController.putTodoById)
router.delete('/:id', authentication, isOwner, TodoController.deleteTodoById)

module.exports = router