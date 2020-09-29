import React from "react";
import MainBlock from "../MainBlock";
import Cities from "../Cities";
import Forecast from "../Forecast";
import "./App.scss";

const weekdayList = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WEN",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: "Melbourne",
      currentCityWeather: {},
      weatherList: [],
      forecastList: [],
    };
  }

  async getForecast(city) {
    let latitude = "";
    let longitude = "";
    switch (city) {
      case "Melbourne":
        latitude = "-37.813629";
        longitude = "144.963058";
        break;
      case "Sydney":
        latitude = "-33.868820";
        longitude = "151.209290";
        break;
      case "Perth":
        latitude = "-31.950527";
        longitude = "115.860458";
        break;
      case "Brisbane":
        latitude = "-27.469770";
        longitude = "153.025131";
        break;
      default:
        break;
    }
    this.setState({
      forecastList: [],
    });
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=e0d2473abf2fcc68352038b473b45772`
    )
      .then((response) => response.json())
      .then((data) => {
        const { daily } = data;
        let fiveDaysWeather = daily.slice(0, 5);

        fiveDaysWeather.map(({ temp, weather, dt }) => () => {
          const [{ icon }] = weather;
          const { day: temperature } = temp;
          const weekday = weekdayList[new Date(dt * 1000).getDay()];
          const forecastObject = {
            temperature: temperature,
            icon: icon,
            weekday: weekday,
          };
          this.setState({
            forecastList: [...this.state.forecastList, forecastObject],
          });
        });
      });
  }

  async getWeather(city) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        ",au&units=metric&appid=e0d2473abf2fcc68352038b473b45772"
    )
      .then((response) => response.json())
      .then((data) => {
        const { name: location, main, weather, wind } = data;
        const { humidity, temp: temperature } = main;
        const [{ main: weatherType, icon }] = weather;
        const { speed: windSpeed } = wind;

        const weatherObject = {
          location: location,
          humidity: humidity,
          temperature: temperature,
          weatherType: weatherType,
          windSpeed: windSpeed,
          icon: icon,
        };
        this.setState({
          weatherList: [...this.state.weatherList, weatherObject],
        });
      });
  }

  setCurrenrActiveCity = (currentCityName) => {
    const currentCityWeather = this.state.weatherList.find(
      (weatherObject) => weatherObject["location"] === currentCityName
    );
    this.setState({
      currentCityWeather: currentCityWeather,
    });
    this.getForecast(currentCityName);
  };

  componentDidMount() {
    Promise.all([
      this.getWeather("Melbourne"),
      this.getWeather("Sydney"),
      this.getWeather("Brisbane"),
      this.getWeather("Perth"),
    ]).then(() => {
      this.setCurrenrActiveCity("Melbourne");
    });
  }

  render() {
    const { currentCityWeather, weatherList, forecastList } = this.state;
    const currentCityName = currentCityWeather["location"];

    return (
      <div className="app__container">
        <MainBlock weatheInfo={currentCityWeather}></MainBlock>
        <div className="cityAndForecast">
          <Cities
            weatherList={weatherList}
            currentCityName={currentCityName}
            handleCityClick={this.setCurrenrActiveCity}
          >
            Cities
          </Cities>
          <Forecast forecastList={forecastList}>Forecast</Forecast>
        </div>
      </div>
    );
  }
}

export default App;
