import React from "react";
import "./App.css";
import Search from "./Search";
import WeatherAppData from "./Weather-app-data";
import WeatherTemperatureContainer from "./Weather-app-temperature-container";
import WeatherForecast from "./Weather-forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <div className="main">
          <WeatherAppData />
          <WeatherForecast />
          <WeatherTemperatureContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
