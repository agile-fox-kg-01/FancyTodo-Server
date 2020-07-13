const express = require('express')
const router = express.Router()

const ApiController = require('../controllers/api')

// router.get('/covid', ApiController.getCovid)
// router.get('/categories', ApiController.getCategories)
// router.get('/restaurant', ApiController.getRestaurant)
router.get('/restaurant', ApiController.getRestaurantBandung)

module.exports = router