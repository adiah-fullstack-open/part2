import React, { useEffect, useState } from "react";
import weatherService from "../services/weather";

const CountryData = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherService.getCoords(country.capital[0]).then((coords) => {
      const lat = coords[0].lat;
      const lon = coords[0].lon;
      weatherService
        .getWeather(lat, lon)
        .then((weather) => setWeatherData(weather));
    });
  }, []);

  const languages = [];
  for (const lang in country.languages) {
    languages.push({ code: lang, language: country.languages[lang] });
  }

  return (
    <div>
      <h1 className="name">{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <h2>languages</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code}>{lang.language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} className="flag" />

      {weatherData && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>temperature {weatherData.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryData;
