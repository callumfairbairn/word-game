import React, { useState } from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import GridWrapper from '../Grid/GridWrapper'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import { resetInputField } from '../Grid/GridWrapperHelperFunctions'

export const Game = ({ foundWordsHook, scoreHook, letterList, setGameRunning }) => {
  const inputHook = useState('')

  const [, setInput] = inputHook
  const [foundWords] = foundWordsHook
  const [score] = scoreHook

  const stopGame = () => {
    setInput('')
    resetInputField()
    setGameRunning(false)
  }

  return (
    <div className='game'>
      <TimerWrapper endTimerFunction={stopGame} />
      <div className='container-b'>
        <ScoreDisplay score={score} />
        <GridWrapper foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} letterList={letterList} />
        <WordDisplay foundWords={foundWords} />
      </div>
    </div>
  )
}
