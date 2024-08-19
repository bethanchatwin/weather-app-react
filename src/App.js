import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import FormatDate from "./Date";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <FormatDate />
        <Footer />
      </div>
    </div>
  );
}

export default App;
