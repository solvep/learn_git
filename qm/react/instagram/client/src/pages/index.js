import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import '@scss/base.scss';
import './index.scss';

import Detail from './detail/index'

class Instagram extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Detail}/>
        </Switch>
      </Router>
    )
  }
}

export default Instagram;