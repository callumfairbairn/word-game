import React, { useState } from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import GridWrapper from '../Grid/GridWrapper'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import { resetInputField } from '../Grid/GridWrapperHelperFunctions'
import { GAME_STARTING_TIME } from '../../common/constants'

export const Game = ({ foundWordsHook, scoreHook, letterList, setGameRunning, usedLettersHook }) => {
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
      <TimerWrapper endTimerFunction={stopGame} startingTime={GAME_STARTING_TIME} />
      <div className='container-b'>
        <ScoreDisplay score={score} />
        <GridWrapper foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} letterList={letterList} usedLettersHook={usedLettersHook} />
        <WordDisplay foundWords={foundWords} />
      </div>
    </div>
  )
}
