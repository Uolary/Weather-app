import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    let progressInfo = (
      <div>
        <i className="material-icons large">cloud_done</i>
        <span className="card-title center-align">Поиск погоды в вашем городе</span>
      </div>
    )

    if (this.props.error) {
      progressInfo = ( 
        <div>
          <i className="material-icons medium">error_outline</i>
          <span className="card-title center-align">Не найдено</span>
        </div>
      )
    } else if (this.props.loading) {
      progressInfo = ( 
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
      )
    } else if (this.props.info.nameCity) {
      progressInfo = (
        <div className="weather-cards">
          <div>
            <span className="card-title center-align city-name">{this.props.info.nameCity}</span>
            <span className="weather-description">{this.props.info.description}</span>
            <ul className="full-info">
              <li>Температура: {this.props.info.temp} °C</li>
              <li>Давление: {this.props.info.pressure} гПа</li>
              <li>Влажность: {this.props.info.humidity} %</li>
              <li>Скорость ветра: {this.props.info.windSpeed} км/ч</li>
            </ul>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${this.props.info.icon}@2x.png`} alt="icon" />
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

export default WeatherInfo;