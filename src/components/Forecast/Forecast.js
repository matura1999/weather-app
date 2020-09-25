import React from "react";
import "./Forecast.scss";

const Forecast = ({ att1, att2, children }) => (
  <div className="forecast__container">
    <h3> {children}</h3>
  </div>
);

export default Forecast;
