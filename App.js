import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const apiKey = "d527eac32ab7d9e39e3cc37336136510";

  const fetchWeather = async () => {
    if (!city.trim()) return alert("Please enter a city name");

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const weatherJson = await weatherRes.json();
      if (weatherJson.cod !== 200) throw new Error(weatherJson.message);
      setWeatherData(weatherJson);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastJson = await forecastRes.json();
      const dailyForecast = forecastJson.list.filter(f =>
        f.dt_txt.includes("12:00:00")
      );
      setForecastData(dailyForecast);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weatherData && <Weather data={weatherData} />}
      {forecastData.length > 0 && <Forecast forecast={forecastData} />}
    </div>
  );
}

export default App;
