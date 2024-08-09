import React from "react";

import "./Weather-app-data.css";

export default function WeatherAppData() {
  return (
    <div className="weather-app-data">
      <h1 className="weather-app-city" id="city">
        Paris
      </h1>
      <p className="weather-app-details">
        <span id="time"></span>, <span id="description"></span>
        <br />
        Humidity: <strong id="humidity"></strong>, Wind:{" "}
        <strong id="wind"></strong>
      </p>
    </div>
  );
}
