import React, { useState, useEffect } from 'react'
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
        <TimerWrapper setLetterList={setLetterList} setFoundWords={setFoundWords} />
        <GridWrapper letterList={letterList} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
      </div>
    </div>
  )
}

const GridWrapper = ({ letterList, dict, foundWords, setFoundWords }) => {
  const [input, setInput] = useState('')
  const [grid, setGrid] = useState(generateGrid(letterList))
  const [gridMask, setGridMask] = useState(grid)
  const paths = createPaths(grid, input)
  const wordStatus = calculateWordStatus(input, dict, foundWords, false)

  useEffect(() => {
    setGrid(assignLetterStatus(generateGrid(letterList), paths, wordStatus))
    if (input.length > 2) {
      setGridMask(generateGrid((letterList)))
    }
  }, [input, letterList])

  const onFormSubmit = (event) => {
    event.preventDefault()
    const newWordStatus = calculateWordStatus(input, dict, foundWords, true)

    if (newWordStatus === 'correct' && paths.length > 0) {
      setGridMask(assignLetterStatus(generateGrid(letterList), paths, newWordStatus))
      const newFoundWords = foundWords
      newFoundWords.push(input)
      setFoundWords(newFoundWords)
      resetInputField()
      setInput('')
    }
  }

  return (
    <div className='container-b'>
      <div className='grid-wrapper'>
        <div className='grid-container'>
          <Grid grid={grid} />
          <Grid grid={gridMask} mask />
        </div>
        <InputField setInput={setInput} onFormSubmit={onFormSubmit} />
      </div>
      <WordDisplay foundWords={foundWords} />
    </div>
  )
}

const TimerWrapper = ({ setLetterList, setFoundWords }) => {
  const [time, setTime] = useState(STARTING_TIME)
  if (time.minutes === -1 && time.seconds === 59) {
    resetGrid(setTime, setLetterList, setFoundWords)
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

const resetGrid = (setTime, setLetterList, setFoundWords) => {
  setTime(STARTING_TIME)
  setLetterList(generateRandomLetterList())
  setFoundWords([])
}

export default App
