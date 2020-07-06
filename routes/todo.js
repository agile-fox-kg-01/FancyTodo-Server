const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/todo')

router.post('/', TodoController.postTodo)
router.get('/' , TodoController.getTodo)
router.get('/:id', TodoController.getTodoById)
router.put('/:id', TodoController.putTodoById)
router.delete('/:id', TodoController.deleteTodoById)

module.exports = router