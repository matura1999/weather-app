import React from "react";
import MainBlock from "../MainBlock";
import Cities from "../Cities";
import Forecast from "../Forecast";

import "./App.scss";

const weatherList = [
  {
    location: "Perth",
    temperature: 16,
    weather: "Clouds",
    humidity: "93%",
    wind: "3.1 K/M",
  },

  {
    location: "Sydney",
    temperature: 26,
    weather: "Clouds",
    humidity: "93%",
    wind: "3.1 K/M",
  },
  {
    location: "Brisbane",
    temperature: 26,
    weather: "Clouds",
    humidity: "93%",
    wind: "3.1 K/M",
  },
];

const weatheInfo = {
  location: "Melbourne",
  temperature: "8.4 °",
  weather: "Clouds",
  humidity: "93%",
  wind: "3.1 K/M",
};

const forecastList = [
  {
    weekday: "MON",
    temperature: "26°",
    type: "clouds",
  },

  {
    weekday: "TUE",
    temperature: "26°",
    type: "clouds",
  },
  {
    weekday: "WEN",
    temperature: "26°",
    type: "clouds",
  },
  {
    weekday: "THU",
    temperature: "26°",
    type: "clouds",
  },
  {
    weekday: "FRI",
    temperature: "26°",
    type: "clouds",
  },
];

// class CurrentWeather extends React.Component {
//   async getCurrentWeather() {
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e0d2473abf2fcc68352038b473b45772");
//     const data = await response.json();
//     this.setState({
//       data,
//     });
//   }

//   componentDidMount() {
//     this.getCurrentWeather();
//   }
//   render() {
//     const { data } = this.state;
//     return <div>{data}</div>;
//   }
// }

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e0d2473abf2fcc68352038b473b45772"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

const App = () => (
  <div className="app__container">
    <MainBlock weatheInfo={weatheInfo}></MainBlock>
    <div className="cityAndForecast">
      <Cities weatherList={weatherList}>Cities</Cities>
      <Forecast forecastList={forecastList}>Forecast</Forecast>
    </div>
  </div>
);

export default App;
