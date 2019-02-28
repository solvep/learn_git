import React , {Component} from 'react';
import './Square.css';

class Square extends Component{
  constructor (props){
    super(props);
    this.state = {}
  }
  getSquareTitle(){
    const {info,pos} = this.props;
    let title = pos;
    if(info){
      title = info
    }
    return title;
  }
  handleClick(){
    const {info,pos,onClick} = this.props;
    if(onClick){
      onClick(pos,info)
    }
    // console.log(pos,info,onClick)
  }
  render(){
    return (
      <div className="square" onClick={this.handleClick.bind(this)}>
        {this.getSquareTitle()}
      </div>
    )
  }
}

export default Square;