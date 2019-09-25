const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlPizza = require('../controllers/PizzaPlaces');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);

router.get('/pizza', ctrlPizza.pizzaList);
router.get('/pizza', ctrlPizza.pizzaInfo);

module.exports = router;
