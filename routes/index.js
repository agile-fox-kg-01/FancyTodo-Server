const express = require('express');
const login = require('./login.js');
const register = require('./register.js');
const todo = require('./todo.js');

const router = express.Router();

router.use('/login', login);
router.use('/register', register);
router.use('/todos', todo);

module.exports = router;