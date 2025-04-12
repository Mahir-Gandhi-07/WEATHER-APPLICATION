import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p><strong>{new Date(day.dt_txt).toDateString()}</strong></p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon" />
            <p>{day.weather[0].main}</p>
            <p>{day.main.temp} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
