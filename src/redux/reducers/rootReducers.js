import { combineReducers } from 'redux';
import { weather, weatherHasErrored, weatherIsLoading } from './weather';

export default combineReducers({
  weather,
  weatherHasErrored,
  weatherIsLoading
});