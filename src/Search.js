import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="search-city">
        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="input-field col s12 m9">
                <input placeholder="Город" type="text" className="validate" />
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

export default Search;