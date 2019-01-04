import React from 'react';
import PropTypes from 'prop-types'
import Clock from './clock';
export default class ClockContainer extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      time:props.time
    }
  }
componentDidMount(){
  this._interval = setInterval(this._update , 1000)
}
_update = ()=>{
  this.setState({
    time:new Date(this.state.time.getTime() + 1000)
  })
}

_exact = (time) =>{
  console.log(time)
  return {
    hours:time.getHours(),
    minutes: time.getMinutes(),
    secondes:time.getSeconds(),
  }
}

  render(){
    // const {hours,minutes,secondes} = this._exact(this.state.time);
    return <Clock {...this._exact(this.state.time)}></Clock>
  }
}

ClockContainer.propTypes = {
  time:PropTypes.object.isRequired
}