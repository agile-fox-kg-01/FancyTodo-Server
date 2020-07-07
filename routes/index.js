const express = require('express');
const router = express.Router();

const todos = require('./todos-router');
router.use('/todos', todos);


const UsersController = require('../controllers/usersController');
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);

const ghibli = require('./ghibli-router')
router.use('/ghibli', ghibli)


module.exports = router;