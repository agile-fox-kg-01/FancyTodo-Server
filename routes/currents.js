const express = require('express');
const ApiController = require('../controllers/ApiController.js');

const router = express.Router();

router.get('/latest-news', ApiController.getLatestNews);

module.exports = router;