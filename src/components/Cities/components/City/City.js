import React from "react";
import "./City.scss";

// const icon = ;

const City = ({ cityName, temperature }) => (
  <div className="city__container">
    <span className="city__name">{cityName}</span>
    <span className="city__temperature">{temperature} °</span>
    {temperature > 20 && (
      <span className="city__icon">
        <i className="fas fa-cloud"></i>
      </span>
    )}
    {temperature < 20 && (
      <span className="city__icon">
        <i className="fas fa-sun"></i>
      </span>
    )}
  </div>
);

export default City;
