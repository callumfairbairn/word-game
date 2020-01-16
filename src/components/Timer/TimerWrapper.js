import { STARTING_TIME } from '../../common/constants'
import Timer from './Timer'
import React, { useState } from 'react'
import { generateRandomLetterList } from '../../functions/LetterListGeneration/generateRandomLetterList'

const TimerWrapper = ({ letterListHook, foundWordsHook, inputHook, scoreHook, resetInputField }) => {
  const [, setLetterList] = letterListHook
  const [, setFoundWords] = foundWordsHook
  const [, setInput] = inputHook
  const [, setScore] = scoreHook

  const resetGrid = () => {
    setTime(STARTING_TIME)
    setLetterList(generateRandomLetterList())
    setFoundWords([])
    setInput('')
    setScore(0)
    resetInputField()
  }

  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    resetGrid()
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

export default TimerWrapper
