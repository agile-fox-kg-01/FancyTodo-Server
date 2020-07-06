const express = require('express');
const todo = require('./todo.js');

const router = express.Router();

router.use('/todos', todo);

module.exports = router;