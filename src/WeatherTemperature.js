import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheight(event) {
    event.preventDefault();
    setUnit("farenheight");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="weather-app-temperature" id="current-temp">
          {Math.round(props.celsius)}
        </span>
        <span className="weather-app-unit">
          °C|
          <a href="/" onClick={showFarenheight}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheight = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="weather-app-temperature" id="current-temp">
          {Math.round(farenheight)}
        </span>
        <span className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
