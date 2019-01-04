import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
function AmbiguousExample(){
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about" >about</Link>
          </li>
          <li>
            <Link to="/company">company</Link>
          </li>
          <li>
            <Link to="/kim" >Kim</Link>
          </li>
          <li>
            <Link to="/chris">Chris</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/company' component={Company}></Route>
          <Route path='/:user' component={User}></Route>
        </Switch>
      </div>
    </Router>
  )
}

function About(){
  return <h2>About</h2>
}
function Company(){
  return <h2>Company</h2>
}
function User({match}){
  return <h2>User:{match.params.user}</h2>
}

ReactDOM.render(<AmbiguousExample></AmbiguousExample>,document.getElementById('root'))