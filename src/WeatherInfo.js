import React from 'react';
import { connect } from 'react-redux';

class WeatherInfo extends React.Component {
  render() {
    let progressInfo = (
      <div>
        <i className="material-icons large">cloud_done</i>
        <span className="card-title center-align">Поиск погоды в вашем городе</span>
      </div>
    )

    if (this.props.hasErrored) {
      progressInfo = ( 
        <div>
          <i className="material-icons medium">error_outline</i>
          <span className="card-title center-align">Не найдено</span>
        </div>
      )
    } else if (this.props.hasLoading) {
      progressInfo = ( 
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
      )
    } else if (this.props.weatherInfo.nameCity) {
      progressInfo = (
        <div className="weather-cards">
          <div>
            <span className="card-title center-align city-name">{this.props.weatherInfo.nameCity}</span>
            <span className="weather-description">{this.props.weatherInfo.description}</span>
            <ul className="full-info">
              <li>Температура: {this.props.weatherInfo.temp} °C</li>
              <li>Давление: {this.props.weatherInfo.pressure} гПа</li>
              <li>Влажность: {this.props.weatherInfo.humidity} %</li>
              <li>Скорость ветра: {this.props.weatherInfo.windSpeed} км/ч</li>
            </ul>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${this.props.weatherInfo.icon}@2x.png`} alt="icon" />
          </div>
        </div>
      )
    }
    
    return (
      <div className="weather-info">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 weather-city">
              <div className="card teal lighten-1">
                <div className="card-content white-text">
                  {progressInfo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    weatherInfo: state.weather,
    hasErrored: state.weatherHasErrored,
    isLoading: state.weatherIsLoading
  }
}

export default connect(mapStateToProps, null)(WeatherInfo);