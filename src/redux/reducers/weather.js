import { WEATHER_HAS_ERRORED, WEATHER_IS_LOADING, GET_WEATHER_DATA_SUCCESS } from "../actions/actionTypes";

export function weatherHasErrored(state = false, action) {
  switch (action.type) {
    case WEATHER_HAS_ERRORED:
      return action.hasErrored
    default:
      return state
  }
}

export function weatherIsLoading(state = false, action) {
  switch (action.type) {
    case WEATHER_IS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export function weather(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER_DATA_SUCCESS:
      return action.weatherInfo
    default:
      return state
  }
}