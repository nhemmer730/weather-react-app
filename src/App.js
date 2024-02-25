import React from "react";
import Weather from "./Weather";
import WeatherIcons from "./WeatherIcons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <Weather />
        <WeatherIcons />
      </header>
    </div>
  );
}

export default App;
