import React from "react";
import "./Cities.scss";
import City from "./components/City";

class Cities extends React.Component {
  render() {
    const weatherList = this.props.weatherList;

    return (
      <div className="cities__container">
        <div className="cities__title">Other Cities</div>
        <div className="cities__list">
          {weatherList.map(({ temperature, location }) => (
            <City
              temperature={temperature}
              cityName={location}
              key={location}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cities;
