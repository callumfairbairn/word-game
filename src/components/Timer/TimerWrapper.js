import { STARTING_TIME } from '../../common/constants'
import Timer from './Timer'
import React, { useState } from 'react'

const TimerWrapper = ({ endTimerFunction }) => {
  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    setTime(STARTING_TIME)
    endTimerFunction()
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

export default TimerWrapper
