import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/bethanchatwin" target="_blank">
        Beth Chatwin
      </a>
      , is
      <a
        href="https://github.com/bethanchatwin/weather-app-react"
        target="_blank"
      >
        {" "}
        open-sourced on GitHub{" "}
      </a>
      and
      <a href="https://bethsreactweatherapp.netlify.app" target="_blank">
        {" "}
        hosted on Netlify
      </a>
    </footer>
  );
}
