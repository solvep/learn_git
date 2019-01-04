import React, { Component } from 'react';
import './App.css';
import B from './B';
// import C from './C';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>高阶组件理解</h2>
          {/* <A></A> */}
          <B></B>
          {/* <C></C> */}
        </div>
      </div>
    );
  }
}

export default App;
