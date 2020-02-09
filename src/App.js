import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Search />
        <WeatherInfo />
      </div>
    );
  }
}

export default App;
