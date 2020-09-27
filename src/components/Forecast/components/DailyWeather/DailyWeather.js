import React from "react";
import "./DailyWeather.scss";

const DailyWeather = ({ weekday, icon, temperature }) => (
  <div className="dailyWeather__container">
    <div className="dailyWeather__weekday">{weekday}</div>
    <div className="dailyWeather__icon">
      <i className="fas fa-cloud"></i>
    </div>
    <div className="dailyWeather__temperature">{temperature}</div>
  </div>
);

export default DailyWeather;
