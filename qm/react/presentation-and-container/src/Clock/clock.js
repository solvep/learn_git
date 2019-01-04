import React from 'react';
import PropTypes from 'prop-types'

export default function Clock(props){
  var [hours,minutes,secondes] = [
    props.hours,
    props.minutes,
    props.secondes,
  ].map(num =>num<10?'0'+num:num);
  return <h1>{hours}:{minutes}:{secondes}</h1>
}

Clock.prototype = {
  hours:PropTypes.number.isRequired,
  minutes:PropTypes.number.isRequired,
  secondes:PropTypes.number.isRequired
}