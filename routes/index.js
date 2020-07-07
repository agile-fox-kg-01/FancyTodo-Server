const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/TodoController')
const userRouter = require('./user-router')
const { authentication, isOwner } = require('../middlewares/auth')

router.get('/tasks', authentication, TodoController.index)
router.post('/tasks', authentication, TodoController.create)
router.get('/tasks/:id', authentication, isOwner, TodoController.read)
router.put('/tasks/:id', authentication, isOwner, TodoController.update)
router.delete('/tasks/:id', authentication, isOwner, TodoController.delete)
router.get('/weather', TodoController.weather)

router.use('/user', userRouter)

module.exports = router