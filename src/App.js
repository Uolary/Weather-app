import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import { apiKey } from './apiKey';

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
    this.getWeatherData = this.getWeatherData.bind(this)
  }

  getWeatherData(event) {
    event.preventDefault()

    const city = event.target.elements.city.value

    this.setState({
      hasErrored: false,
      isLoading: true
    })

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
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

  render() {
    return (
      <div className="App">
        <Search getWeatherData={this.getWeatherData} />
        
        <WeatherInfo 
          info={this.state.weatherInfo} 
          error={this.state.hasErrored} 
          loading={this.state.isLoading}  
        />
      </div>
    );
  }
}

export default App;
