import { STARTING_TIME } from '../../common/constants'
import Timer from './Timer'
import React, { useState } from 'react'
import { generateRandomLetterList } from '../../functions/Generation/generation'

const TimerWrapper = ({ setLetterList, setFoundWords }) => {
  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    resetGrid(setTime, setLetterList, setFoundWords)
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

const resetGrid = (setTime, setLetterList, setFoundWords) => {
  setTime(STARTING_TIME)
  setLetterList(generateRandomLetterList())
  setFoundWords([])
}

export default TimerWrapper
