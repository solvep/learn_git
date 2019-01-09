import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({value,onIncrementAsync,onIncrement,onDecrement}) =>(
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 seconds</button>
    <button onClick={onIncrement}>onIncrement</button>
    <button onClick={onDecrement}>onDecrement</button>
    <hr/>
    <div>
      Click {value} times 
    </div>
  </div>
)

Counter.propTypes = {
  value:PropTypes.number.isRequired,
  onIncrementAsync:PropTypes.func.isRequired,
  onIncrement:PropTypes.func.isRequired,
  onDecrement:PropTypes.func.isRequired,
}

export default Counter;