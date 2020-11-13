const express = require('express')
const router = express.Router()
const { TodosController } = require('../controllers/todos.js')
const { authentication, authorization } = require('../middlewares/auths.js')


router.post('/', authentication, TodosController.create)
router.get('/', authentication, TodosController.showAllTodos)
router.get('/:id', authentication, authorization, TodosController.findTodo)
router.put('/:id', authentication, authorization, TodosController.updateTodo)
router.delete('/:id', authentication, authorization, TodosController.destroyTodo)
router.patch('/:id', authentication, authorization, TodosController.editStatus)


module.exports = router