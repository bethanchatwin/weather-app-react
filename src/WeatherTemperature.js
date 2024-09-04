import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-app-tempertaure">
      <div className="weather-app-temperature" id="current-temp">
        {Math.round(props.data.temperature)}°C{" "}
      </div>
    </div>
  );
}
