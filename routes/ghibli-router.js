const express = require('express');
const router = express.Router();
const GhibliController = require('../controllers/ghibliControllers')


const {authentification} = require('../middlewares/auth');

router.use(authentification)
router.get('/', GhibliController.listFilms);


module.exports = router;