# 🌦️ Weather API Service

A simple RESTful API to fetch real-time weather data for any city using an external weather API (like OpenWeatherMap), store it in a database, retrieve recent weather history, send extreme weather alerts via email, and handle errors with logging.

---

## 📥 Clone & Run

```bash
git clone https://github.com/your-username/weather-api.git
cd weather-api
npm install
npm start
```
## Install necessary packages
```
npm install express mongoose axios nodemailer dotenv morgan
```

 ## Set up environment variables:
 ```
PORT=3000
MONGO_URI=<mongo_string>
WEATHER_API_KEY=<API>
ALERT_EMAIL=<youremail@gmail.com>
ALERT_PASSWORD=<App Password(generate)>
WEATHER_API=<API_KEY>
```

## API Documentation

| Method | Endpoint              | 
|--------|-----------------------|
| GET   | `/GET/weather/:city` | 
| GET    | `/GET/weather/history/all`  | 
