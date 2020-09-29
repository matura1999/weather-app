import React from "react";
import "./DailyWeather.scss";

const DailyWeather = ({ weekday, icon, temperature }) => (
  <div className="dailyWeather__container">
    <div className="dailyWeather__weekday">{weekday}</div>
    <img
      className="dailyWeather__icon"
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weatherIcon"
    />
    <div className="dailyWeather__temperature">{temperature}°</div>
  </div>
);

export default DailyWeather;
