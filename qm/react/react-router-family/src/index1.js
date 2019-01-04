import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,  Link,Prompt} from 'react-router-dom';

function PreventingTransitionExample () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">From</Link>
          </li>
          <li>
            <Link to="/one">one</Link>
          </li>
          <li>
            <Link to="/two">two</Link>
          </li>
        </ul>
        <Route path="/" exact component={Form}/>
        <Route path="/one" component={One}/>
        <Route path="/two" component={Two}/>
      </div>
    </Router>
  );
}
const One = () =>{
  return(
    <div>One</div>
  )
}
const Two = () =>{
  return(
    <div>Two</div>
  )
}
class Form extends React.Component {
  state = { isBlocking: false }
  componentWillMount(){
    console.log('unmount')
  }
  render () {
    let {isBlocking} = this.state;
    return (
      <form 
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        this.setState({
          isBlocking:false
        })
      }}>
      <Prompt when={isBlocking} 
        message={location =>`Are you sure you want to go to${location.pathname}`}></Prompt>
        <p>
          <input type="text" size="50" 
          placeholder="type somthing to broke transitions"
          onChange={
            event => {
              this.setState({
                isBlocking: event.target.value.trim().length > 0 
              })
            }
          }
          />

        </p>
        <p>
          <button type="submit">Submit to stop blocking</button>
        </p>
      </form>
    )
    
  }
}

ReactDOM.render ( <PreventingTransitionExample />, document.getElementById('root'))