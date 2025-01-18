import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [weather, setWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const api_key = "c712b05b078a11c8cfef9b3520f01017";
  const city_Name = "Chennai";
  const currentWeatherApiURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city_Name}&appid=${api_key}&units=metric&cnt=5`;

  function convertTimestamp(timeStamp) {
    const date = new Date(timeStamp * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    return day;
  }

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Rain":
        return <i className="bx bx-cloud-rain"></i>;
      case "Clouds":
        return <i className="bx bx-cloud"></i>;
      default:
        return <i className="bx bx-sun"></i>;
    }
  };

  const day = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const date = new Date();
  const formattedDate = `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "long",
  })} ${date.getFullYear()}`;

  useEffect(() => {
    const fetchCurrentData = async () => {
      try {
        const response = await fetch(currentWeatherApiURL);
        const data = await response.json();
        if (response.ok) {
          setWeather(data.list[0].weather[0].main);
          setWeatherData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentData();
  }, []);
  return (
    <div className="container">
      <div className="left-info">
        <div className="pic-gradient"></div>
        <div className="today-info">
          <h2>{day}</h2>
          <span>{formattedDate}</span>
          <div>
            <i className="bx bx-current-location"></i>
            <span>{city_Name}</span>
          </div>
        </div>
        <div className="today-weather">
          {weatherData && getWeatherIcon(weatherData.list[0].weather[0].main)}
          {weatherData ? (
            <h1 className="weather-temp">{weatherData.list[0].temp.min}°C</h1>
          ) : (
            <h1 className="weather-temp">...°C</h1>
          )}
          <h3>{weather}</h3>
        </div>
      </div>

      <div className="right-info">
        <div className="day-info">
          <div>
            <span className="title">PRECIPITATION</span>
            {weatherData ? (
              <span className="value">{weatherData.list[0].rain} mm</span>
            ) : (
              <span className="value">4 mm</span>
            )}
          </div>
          <div>
            <span className="title">HUMIDITY</span>
            {weatherData ? (
              <span className="value">{weatherData.list[0].humidity}</span>
            ) : (
              <span className="value">34 %</span>
            )}
          </div>
          <div>
            <span className="title">WIND SPEED</span>
            {weatherData ? (
              <span className="value">{weatherData.list[0].speed} km/h</span>
            ) : (
              <span className="value">... km/h</span>
            )}
          </div>
        </div>

        <ul className="days-list">
          <li>
            {weatherData && getWeatherIcon(weatherData.list[1].weather[0].main)}
            {weatherData ? (
              <span>{convertTimestamp(weatherData.list[1].dt)}</span>
            ) : (
              <span>...</span>
            )}
            {weatherData ? (
              <span className="day-temp">{weatherData.list[1].temp.min}°C</span>
            ) : (
              <span className="day-temp">..°C</span>
            )}
          </li>
          <li>
            {weatherData && getWeatherIcon(weatherData.list[2].weather[0].main)}
            {weatherData ? (
              <span>{convertTimestamp(weatherData.list[2].dt)}</span>
            ) : (
              <span>...</span>
            )}
            {weatherData ? (
              <span className="day-temp">{weatherData.list[2].temp.min}°C</span>
            ) : (
              <span className="day-temp">..°C</span>
            )}
          </li>
          <li>
            {weatherData && getWeatherIcon(weatherData.list[3].weather[0].main)}
            {weatherData ? (
              <span>{convertTimestamp(weatherData.list[3].dt)}</span>
            ) : (
              <span>...</span>
            )}
            {weatherData ? (
              <span className="day-temp">{weatherData.list[3].temp.min}°C</span>
            ) : (
              <span className="day-temp">..°C</span>
            )}
          </li>
          <li>
            {weatherData && getWeatherIcon(weatherData.list[4].weather[0].main)}
            {weatherData ? (
              <span>{convertTimestamp(weatherData.list[4].dt)}</span>
            ) : (
              <span>...</span>
            )}
            {weatherData ? (
              <span className="day-temp">{weatherData.list[4].temp.min}°C</span>
            ) : (
              <span className="day-temp">..°C</span>
            )}
          </li>
        </ul>

        <div className="btn-container">
          <button className="loc-button">Search Location</button>
        </div>
      </div>
    </div>
  );
}

export default App;
