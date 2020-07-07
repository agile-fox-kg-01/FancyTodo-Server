const express = require('express');

const TodoController = require('../controllers/TodoController.js');
const {authentication, authorization} = require('../middlewares/auth.js');

const router = express.Router();

router.post('/', authentication, TodoController.postTodoAddHandler);
router.get('/', authentication, TodoController.getTodoRootHandler);
router.get('/:id', authentication, authorization, TodoController.getTodoUpdateHandler);
router.put('/:id', authentication, authorization, TodoController.putTodoUpdateHandler);
router.delete('/:id', authentication, authorization, TodoController.deleteTodoDeleteHandler);

module.exports = router;