const express = require('express');
const TodoController = require('../controllers/TodoController.js');

const router = express.Router();

router.post('/', TodoController.postTodoAddHandler);
router.get('/', TodoController.getTodoRootHandler);
router.get('/:id', TodoController.getTodoUpdateHandler);
router.put('/:id', TodoController.putTodoUpdateHandler);
router.delete('/:id', TodoController.deleteTodoDeleteHandler);

module.exports = router;