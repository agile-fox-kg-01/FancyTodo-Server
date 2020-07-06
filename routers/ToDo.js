const express = require('express');
const router = express.Router();

const ToDoController = require('../controllers/ToDoController.js');

router.post('/', ToDoController.createToDo)
router.get('/', ToDoController.readToDo)
router.get('/:id', ToDoController.readToDoById)
router.put('/:id', ToDoController.updateToDo)
router.delete('/:id', ToDoController.deleteToDo)

module.exports = router;