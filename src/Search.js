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
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.weather[0].icon}`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input className="input" type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <p>{response.data.city}</p>
        <p>{response.data.city}</p>
        <p>{response.data.city}</p>
        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}
