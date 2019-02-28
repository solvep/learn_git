import  React , {Component} from 'react';

class MyButton extends Component{
  render(){
    return React.createElement(
      MyButton,
      {color: 'blue', shadowSize: 2},
      'Click Me'
    )
  }
}

export default MyButton;