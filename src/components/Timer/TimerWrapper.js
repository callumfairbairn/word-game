import { STARTING_TIME } from '../../common/constants'
import Timer from './Timer'
import React, { useState } from 'react'

const TimerWrapper = ({ resetGame }) => {
  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    setTime(STARTING_TIME)
    resetGame()
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

export default TimerWrapper
