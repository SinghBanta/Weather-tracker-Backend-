const router = require('express').Router();

const weatherController = require('../../controllers/weather/weather');

router.get('/:city', weatherController.getWeather);
router.get('/history/:all', weatherController.getWeatherHistory);

module.exports = router;
