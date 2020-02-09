import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import apiKey from './apiKey';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: {
        nameCity: '',
        temp: null,
        pressure: null,
        humidity: null,
        windSpeed: null,
        description: ''
      },
      hasErrored: false,
      isLoading: false
    }
  }

  fetchData(url) {
    this.setState({
      isLoading: true
    })

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        this.setState({
          isLoading: false
        })

        return response
      })
      .then(response => response.json())
      .then(weatherJSON => {
        this.setState({
          weatherInfo: {
            nameCity: weatherJSON.name,
            temp: weatherJSON.main.temp,
            pressure: weatherJSON.main.pressure,
            humidity: weatherJSON.main.humidity,
            windSpeed: weatherJSON.wind.speed,
            description: weatherJSON.weather[0].description
          }
        })
        console.log('state = ', this.state.weatherInfo)
      })
      .catch(() => this.setState({
        hasErrored: true
      }))
  }

  componentDidMount() {
    this.fetchData('http://api.openweathermap.org/data/2.5/weather?q=минск&appid=5f4229348d69ab02419993565887eb53&units=metric&lang=ru')
  }

  render() {
    return (
      <div className="App">
        <Search />
        
        {
          this.state.hasErrored ? <WeatherInfo info={'Ошибка загрузки'} /> :
          this.state.isLoading ? <WeatherInfo info={'Загрузка...'} /> : 
          this.state.weatherInfo ? <WeatherInfo info={this.state.weatherInfo} /> : null
        }
      </div>
    );
  }
}

export default App;
