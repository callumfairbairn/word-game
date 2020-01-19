import Timer from './Timer'
import React, { useState } from 'react'

const TimerWrapper = ({ endTimerFunction, startingTime }) => {
  const [time, setTime] = useState(startingTime)
  if (time.minutes === -1 && time.seconds === 59) {
    setTime(startingTime)
    endTimerFunction()
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

export default TimerWrapper
