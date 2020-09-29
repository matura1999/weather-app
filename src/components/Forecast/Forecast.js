import React from "react";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import "./Forecast.scss";
import "./components/DailyWeather";
class Forecast extends React.Component {
  render() {
    const forecastList = this.props.forecastList;
    return (
      <div className="forecast__container">
        <div className="forecast__title">Forecast</div>
        <div className="forecast__list">
          {forecastList.map(({ weekday, temperature, icon }) => (
            <DailyWeather
              weekday={weekday}
              temperature={temperature}
              icon={icon}
              key={weekday}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Forecast;
