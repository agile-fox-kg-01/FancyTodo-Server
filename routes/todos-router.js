const express = require('express');
const router = express.Router();

const TodosController = require('../controllers/todosController')

router.post('/', TodosController.post);
router.get('/', TodosController.listAll);
router.put('/:id', TodosController.edit)
router.delete('/:id', TodosController.delete)
module.exports = router;