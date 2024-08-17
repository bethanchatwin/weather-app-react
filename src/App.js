import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />

        <Footer />
      </div>
    </div>
  );
}

export default App;
