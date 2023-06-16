import axios from "axios";
const API_key = process.env.REACT_APP_API_KEY;
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const geoUrl = "http://api.openweathermap.org/geo/1.0/direct";

const getCoords = (city) => {
  const request = axios.get(`${geoUrl}?q=${city}&limit=1&appid=${API_key}`);
  return request.then((response) => response.data);
};

const getWeather = (lat, lon) => {
  const request = axios.get(
    `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  );
  return request.then((response) => response.data);
};

const weatherService = { getCoords, getWeather };

export default weatherService;
