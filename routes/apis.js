const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api.js')


router.get('/weathers', apiController.getWeather)
router.get('/quote', apiController.randomQuote)

module.exports = router