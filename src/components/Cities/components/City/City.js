import React from "react";
import "./City.scss";

// const icon = ;

const City = ({ cityName, temperature, onCityClick, icon }) => (
  <button
    className="city__container"
    onClick={(event) => {
      event.preventDefault();
      onCityClick(cityName);
    }}
  >
    <span className="city__name">{cityName}</span>
    <span className="city__temperature">{temperature}°</span>
    <img
      className="city__icon"
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weatherIcon"
    />
  </button>
);

export default City;
