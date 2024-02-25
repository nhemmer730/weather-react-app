import React, { useState } from "react";
import axios from "axios";
import WeatherIcons from "./WeatherIcons";
import { WeatherSvg } from "weather-icons-animated";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function displayWeather(response) {
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}ºC`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)} km/h`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d5dd31649081791d17cdb524d42767c1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>
      <ul>
        <li>{temperature}</li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
      </ul>
    </div>
  );
}
