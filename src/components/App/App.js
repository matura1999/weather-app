import React from "react";
import MainBlock from "../MainBlock";
import Cities from "../Cities";
import Forecast from "../Forecast";

import "./App.scss";

const App = () => (
  <div className="container">
    <MainBlock>MainBlock</MainBlock>
    <div className="cityAndForecast">
      <Cities>Cities</Cities>
      <Forecast>Forecast</Forecast>
    </div>
  </div>
);

export default App;
