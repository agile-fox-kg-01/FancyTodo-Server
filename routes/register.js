const express = require('express');
const UserController = require('../controllers/UserController.js');

const router = express.Router();

router.post('/', UserController.postUserRegisterHandler);

module.exports = router;