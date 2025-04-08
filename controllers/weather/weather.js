const Weather = require("../../models/Weather.model");
const axios = require("axios");
const sendAlert = require("../../mailer");

// GET/weather/:city
exports.getWeather = async (req, res) => {
  const city = req.params.city;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: "metric",
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      weatherCondition: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      timestamp: new Date(),
    };

    await Weather.create(weatherData);

    if (weatherData.temperature > 40 || weatherData.temperature < 0) {
      await sendAlert(weatherData);
    }

    res.json(weatherData);
  } catch (err) {
    if (err.response?.status === 404) {
      res.status(404).json({ message: "City not found" });
    } else {
      console.error("Error:", err.message);
      res.status(503).json({ message: "Weather service unavailable" });
    }
  }
};

// GET/weather/history
exports.getWeatherHistory = async (req, res) => {
  try {
    const records = await Weather.find({}).sort({ timestamp: -1 }).limit(5);
    res.json(records);
  } catch (err) {
    console.error("History Error:", err.message);
    res.status(500).json({ message: "Error fetching weather history" });
  }
};
