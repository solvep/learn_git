import React, { Component } from 'react';
import Main from './Main';
import './App.css'
import { HashRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}></Route>
          <Route path="/dashboard/monitor" component={Main}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
