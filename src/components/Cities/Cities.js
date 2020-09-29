import React from "react";
import "./Cities.scss";
import City from "./components/City";

class Cities extends React.Component {
  h;

  render() {
    const weatherList = this.props.weatherList;
    const currentCityName = this.props.currentCityName;
    const setCurrenrActiveCity = this.props.handleCityClick;
    const otherCities = weatherList.filter(
      ({ location }) => location !== currentCityName
    );

    return (
      <div className="cities__container">
        <div className="cities__title">Other Cities</div>
        <div className="cities__list">
          {otherCities.map(({ temperature, location, icon }) => (
            <City
              temperature={temperature}
              cityName={location}
              key={location}
              onCityClick={setCurrenrActiveCity}
              icon={icon}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cities;
