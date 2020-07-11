const express = require('express');
const router = express.Router();
const GhibliController = require('../controllers/ghibliControllers')


const {authentification} = require('../middlewares/auth');

router.get('/', authentification, GhibliController.listFilms);


module.exports = router;