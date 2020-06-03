import Timer from './Timer'
import React, { useState } from 'react'
import { GAME_STARTING_TIME, POST_GAME_STARTING_TIME } from '../../common/constants'

const TimerWrapper = ({ endTimerFunction, gameRunning }) => {
  const startTime = gameRunning ? GAME_STARTING_TIME : POST_GAME_STARTING_TIME
  const endTime = gameRunning ? POST_GAME_STARTING_TIME : GAME_STARTING_TIME
  const [time, setTime] = useState(startTime)
  if (time.minutes === -1 && time.seconds === 59) {
    setTime(endTime)
    endTimerFunction()
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

export default TimerWrapper
