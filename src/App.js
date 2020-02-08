import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: [],
      hasErrored: false,
      isLoading: false
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Search />
        
        {
          this.state.hasErrored ? <WeatherInfo info={'Ошибка загрузки'} /> :
          this.state.isLoading ? <WeatherInfo info={'Загрузка...'} /> : null
        }
      </div>
    );
  }
}

export default App;
