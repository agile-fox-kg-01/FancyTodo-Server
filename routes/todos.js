const express = require('express')
const router = express.Router()
const TodosController = require('../controllers/todos.js')

router.post('/', TodosController.create)
router.get('/', TodosController.showAllTodos)
router.get('/:id', TodosController.findTodo)
router.put('/:id', TodosController.updateTodo)
router.delete('/:id', TodosController.destroyTodo)


module.exports = router