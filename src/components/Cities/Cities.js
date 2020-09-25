import React from "react";
import "./Cities.scss";

const Cities = ({ att1, att2, children }) => (
  <div className="city__container">
    <h3> {children}</h3>
  </div>
);

export default Cities;
