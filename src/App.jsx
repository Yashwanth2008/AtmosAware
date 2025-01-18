import "./App.css";
function App() {
  const api_key = "c712b05b078a11c8cfef9b3520f01017";
  const city_Name = "Chennai";
  const currentWeatherApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_Name}&appid=${api_key}&units=metric`;
  const response = fetch(currentWeatherApiURL);
  console.log(response);
  const day = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
  });
  const date = new Date();
  const formattedDate = `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "long",
  })} ${date.getFullYear()}`;
  return (
    <div className="container">
      <div className="left-info">
        <div className="pic-gradient"></div>
        <div className="today-info">
          <h2>{day}</h2>
          <span>{formattedDate}</span>
          <div>
            <i className="bx bx-current-location"></i>
            <span>Paris, FR</span>
          </div>
        </div>
        <div className="today-weather">
          <i className="bx bx-sun"></i>
          <h1 className="weather-temp">25°C</h1>
          <h3>Sunny</h3>
        </div>
      </div>

      <div className="right-info">
        <div className="day-info">
          <div>
            <span className="title">PRECIPITATION</span>
            <span className="value">4 %</span>
          </div>
          <div>
            <span className="title">HUMIDITY</span>
            <span className="value">34 %</span>
          </div>
          <div>
            <span className="title">WIND SPEED</span>
            <span className="value">6 km/h</span>
          </div>
        </div>

        <ul className="days-list">
          <li>
            <i className="bx bx-cloud"></i>
            <span>Sat</span>
            <span className="day-temp">23°C</span>
          </li>
          <li>
            <i className="bx bx-sun"></i>
            <span>Sun</span>
            <span className="day-temp">28°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-rain"></i>
            <span>Mon</span>
            <span className="day-temp">02°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-drizzle"></i>
            <span>Tue</span>
            <span className="day-temp">14°C</span>
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
