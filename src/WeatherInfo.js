import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    let progressInfo = null

    if (this.props.info === 'Ошибка загрузки') {
      progressInfo = ( <i className="material-icons medium">error_outline</i> )
    } else if (this.props.info === 'Загрузка...') {
      progressInfo = ( <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> )
    }

    return (
      <div className="weather-info">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 weather-city">
              <div className="card teal lighten-1">
                <div className="card-content white-text">
                  {progressInfo}
                  <span className="card-title center-align">{this.props.info}</span>
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