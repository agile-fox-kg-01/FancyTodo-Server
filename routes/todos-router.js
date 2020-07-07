const express = require('express');
const router = express.Router();

const TodosController = require('../controllers/todosController');

const {authentification, authorization } = require('../middlewares/auth')

// router.use(authentification) / <- kemarin cek lagi req.paramsnya tidak masuk
router.post('/', authentification, TodosController.create);
router.get('/', authentification, TodosController.listAll);

// router.use(authorization) // <- kemarin cek lagi req.paramsnya tidak masuk
router.put('/:id',authentification, authorization, TodosController.edit)
router.delete('/:id', authentification, authorization, TodosController.delete)


module.exports = router;