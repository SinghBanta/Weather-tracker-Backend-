const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  weatherCondition: String,
  humidity: Number,
  windSpeed: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);
