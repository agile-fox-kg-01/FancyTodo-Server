const express = require('express');
const UserController = require('../controllers/UserController.js');

const router = express.Router();

router.post('/', UserController.postUserLoginHandler);

module.exports = router;