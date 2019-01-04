import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
    .then((res) => {
      this.props.store.dispatch({
        type: 'GET_FILM_DATA',
        payload: res.data.data.films
      });
    })
  }
  
  render () {
    const films = this.props.store.getState().films;
    console.log(films);
    return (
      <div>
        <ul>
        {
          films.map((film, index) => {
            return (
              <li key={index}>
                <h2>{film.name}</h2>
                <img src={film.poster} alt={film.name}/>
              </li>
            );
          })
        }
        </ul>
      </div>
    )
  }
}

export default App;
