import React, { useState } from "react";
import axios from "axios";

export default function FormatDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(formatDate)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoaded(false);
      });
  }
  return `${day} ${hour}:${minutes}`;
}
