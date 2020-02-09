import React from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './redux/actions/weather';

class Search extends React.Component {
  render() {
    return (
      <div className="search-city">
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={(event) => this.props.getWeatherData(event)}>
              <div className="input-field col s12 m9">
                <input placeholder="Город" type="text" className="validate" name="city" />
              </div>
              <div className="input-field col s12 m3">
                <button className="waves-effect waves-light btn"><i className="material-icons left ">cloud</i>Поиск</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeatherData: event => dispatch(getWeatherData(event))
  }
}

export default connect(null, mapDispatchToProps)(Search);