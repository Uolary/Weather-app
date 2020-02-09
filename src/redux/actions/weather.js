import { WEATHER_HAS_ERRORED, WEATHER_IS_LOADING, GET_WEATHER_DATA_SUCCESS } from './actionTypes'
import { apiKey } from '../../apiKey';

export function weatherHasErrored(bool) {
  return {
    type: WEATHER_HAS_ERRORED,
    hasErrored: bool
  }
}

export function weatherIsLoading(bool) {
  return {
    type: WEATHER_IS_LOADING,
    isLoading: bool
  }
}

export function getWeatherDataSuccess(weatherInfo) {
  return {
    type: GET_WEATHER_DATA_SUCCESS,
    weatherInfo
  }
}

export function getWeatherData(event) {
  return (dispatch) => {
    event.preventDefault()

    let city = event.target.elements.city.value

    dispatch(weatherHasErrored(false))
    dispatch(weatherIsLoading(true))

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(weatherIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(weatherJSON => {
        const weatherInfo = {
          nameCity: weatherJSON.name,
          temp: weatherJSON.main.temp,
          pressure: weatherJSON.main.pressure,
          humidity: weatherJSON.main.humidity,
          windSpeed: weatherJSON.wind.speed,
          icon: weatherJSON.weather[0].icon,
          description: weatherJSON.weather[0].description
        }
        dispatch(getWeatherDataSuccess(weatherInfo))
      })
      .catch(() => dispatch(weatherHasErrored(true)))
  }
}