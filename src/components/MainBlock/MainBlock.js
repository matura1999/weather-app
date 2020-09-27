import React from "react";
import "./MainBlock.scss";

const MainBlock = ({ weatheInfo }) => (
  <div className="mainBlock__container">
    <div className="mainBlock__dataBlock">
      <span className="data__tempature">{weatheInfo.temperature}</span>
      <span className="data__weatherType">{weatheInfo.weather}</span>
      <div className="humidityAndWind">
        <div className="data__humidity">
          <span>HUMIDITY</span>
          <span>{weatheInfo.humidity}</span>
        </div>
        <div className="data__wind">
          <span>WIND</span>
          <span>{weatheInfo.wind}</span>
        </div>
      </div>
    </div>
    <div className="mainBlock__locationTitle">{weatheInfo.location}</div>
  </div>
);

export default MainBlock;
