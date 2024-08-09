import "./App.css";
import Search from "./Search";
import WeatherAppData from "./Weather-app-data";
import WeatherTemperatureContainer from "./Weather-app-temperature-container";
import WeatherForecast from "./Weather-forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="weather-app">
      <Search />
      <div className="main">
        <WeatherAppData />
        <WeatherForecast />
        <WeatherTemperatureContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
