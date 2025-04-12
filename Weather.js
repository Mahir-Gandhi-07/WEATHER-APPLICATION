import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" />
      <p><strong>{data.weather[0].main}:</strong> {data.weather[0].description}</p>
      <p><strong>Temperature:</strong> {data.main.temp} °C</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind:</strong> {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
