/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react'
import './Timer.scss'

const Timer = (props) => {
  return (
    <div className="main_timer">
      <div className="time-circle">
        <div className="time">
          <h4>Recording will start in</h4>
          <br />
          {props.seconds}
        </div>
      </div>
    </div>
  )
}

export default Timer
