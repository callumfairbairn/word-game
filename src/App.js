import React, { useState } from 'react'
import './App.scss'
import { Grid } from './components/Grid/Grid'
import { InputField } from './components/InputField/InputField'
import { generateGrid, generateRandomLetterList } from './functions/Generation/generation'
import WordDisplay from './components/WordDisplay/WordDisplay'
import createPaths from './functions/PathCreation/createPaths'
import calculateWordStatus from './functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from './functions/AssignLetterStatus/assignLetterStatus'
import Timer from './components/Timer/Timer'
import { STARTING_TIME } from './common/constants'

function App () {
  const [letterList, setLetterList] = useState(generateRandomLetterList())
  const [foundWords, setFoundWords] = useState([])
  const dict = require('./words')
  return (
    <div className='App'>
      <div className='container-a'>
        <TimerWrapper setLetterList={setLetterList} />
        <GridWrapper letterList={letterList} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
      </div>
    </div>
  )
}

const GridWrapper = ({ letterList, dict, foundWords, setFoundWords }) => {
  const [input, setInput] = useState('')
  const grid = generateGrid(letterList)
  const paths = createPaths(grid, input)
  const wordStatus = calculateWordStatus(input, dict, foundWords)
  const assignedGrid = assignLetterStatus(grid, paths, wordStatus)

  if (wordStatus === 'correct' && paths.length > 0) {
    const newFoundWords = foundWords
    newFoundWords.push(input)
    setFoundWords(newFoundWords)
    resetInputField()
  }

  return (
    <div className='container-b'>
      <div className='grid-wrapper'>
        <Grid grid={assignedGrid} />
        <InputField setInput={setInput} />
      </div>
      <WordDisplay foundWords={foundWords} />
    </div>
  )
}

const TimerWrapper = ({ setLetterList }) => {
  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    setTime(STARTING_TIME)
    setLetterList(generateRandomLetterList())
  }

  return (
    <Timer time={time} setTime={setTime} />
  )
}

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}

export default App
