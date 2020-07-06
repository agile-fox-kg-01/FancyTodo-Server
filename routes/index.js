const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/TodoController')

router.get('/tasks', TodoController.index)
router.post('/tasks', TodoController.create)
router.get('/tasks/:id', TodoController.find)
router.put('/tasks/:id', TodoController.update)
router.delete('/tasks/:id', TodoController.delete)


module.exports = router