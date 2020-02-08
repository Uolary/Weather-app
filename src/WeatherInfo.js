import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    return (
      <div className="weather-info">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 weather-city">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title center-align">Погода в </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherInfo;