import React, { useState } from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import GridWrapper from '../Grid/GridWrapper'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import { generateRandomLetterList } from '../../functions/LetterListGeneration/generateRandomLetterList'

export const Game = ({ letterListHook, foundWordsHook, scoreHook }) => {
  const inputHook = useState('')

  const [, setInput] = inputHook
  const [letterList, setLetterList] = letterListHook
  const [foundWords, setFoundWords] = foundWordsHook
  const [score, setScore] = scoreHook

  const resetGame = () => {
    setLetterList(generateRandomLetterList())
    setFoundWords([])
    setInput('')
    setScore(0)
    resetInputField()
  }

  return (
    <div className='game'>
      <TimerWrapper resetGame={resetGame} />
      <div className='container-b'>
        <ScoreDisplay score={score} />
        <GridWrapper foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} letterList={letterList} resetInputField={resetInputField} />
        <WordDisplay foundWords={foundWords} />
      </div>
    </div>
  )
}

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}
