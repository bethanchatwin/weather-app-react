import React from "react";

import "./Weather-app-temperature-container.css";

export default function WeatherAppTemperatureContainer() {
  return (
    <div className="weather-app-temperature-container">
      <div id="icon"></div>
      <div className="weather-app-temperature" id="current-temp">
        12
      </div>
      <div className="weather-app-unit">°C</div>
    </div>
  );
}
