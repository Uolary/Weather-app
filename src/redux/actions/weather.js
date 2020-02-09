import { WEATHER_HAS_ERRORED, WEATHER_IS_LOADING, GET_WEATHER_DATA_SUCCESS } from './actionTypes'

export function weatherHasErrored(bool) {
  return {
    action: WEATHER_HAS_ERRORED,
    hasErrored: bool
  }
}

export function weatherIsLoading(bool) {
  return {
    action: WEATHER_IS_LOADING,
    isLoading: bool
  }
}

export function getWeatherDataSuccess(weatherInfo) {
  return {
    action: GET_WEATHER_DATA_SUCCESS,
    weatherInfo
  }
}

export function getWeatherData(event, city, apiKey) {
  return (dispatch) => {
    event.preventDefault()

    const city = event.target.elements.city.value

    dispatch(weatherHasErrored(true))

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
        dispatch(weatherInfo)
      })
      .catch(() => dispatch(weatherHasErrored(true)))
  }
}