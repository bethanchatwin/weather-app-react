import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoaded(false);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-form-input"
        type="text"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input className="search-form-button" type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="details">
        {form}

        <div className="data">
          <p>Temperature: {weather.temperature} °C</p>
          <p>Wind: {weather.wind} m/s</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
        <div className="city">
          <p>{weather.city}</p>

          <img src={weather.icon} alt={weather.description} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
