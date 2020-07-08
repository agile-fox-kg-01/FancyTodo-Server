const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api.js')


router.get('/weathers', apiController.getWeather)

module.exports = router