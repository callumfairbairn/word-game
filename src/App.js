import React, { useState } from 'react'
import './App.scss'
import { Grid } from './components/Grid/Grid'
import { InputField } from './components/InputField/InputField'
import { generateGrid, generateRandomLetterList } from './functions/Generation/generation'
import WordDisplay from './components/WordDisplay/WordDisplay'
import createPaths from './functions/PathCreation/createPaths'
import isWordInDictionary from './functions/WordValidation/isWordInDictionary'
import { assignLetterStatus } from './functions/AssignLetterStatus/assignLetterStatus'

function App () {
  const [foundWords, setFoundWords] = useState([])
  const dict = require('./words')
  const letterList = generateRandomLetterList()
  return (
    <GridWrapper letterList={letterList} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
  )
}

const GridWrapper = ({ letterList, dict, foundWords, setFoundWords }) => {
  const [input, setInput] = useState('')

  const grid = generateGrid(letterList)
  const paths = createPaths(grid, input)
  const wordInDictionary = isWordInDictionary(input, dict, foundWords)
  const assignedGrid = assignLetterStatus(grid, paths, wordInDictionary)

  if (wordInDictionary && paths.length > 0) {
    const newFoundWords = foundWords
    newFoundWords.push(input)
    setFoundWords(newFoundWords)
    resetInputField()
  }

  return (
    <div className='App'>
      <div className='outer-container'>
        <div className='container-a'>
          <Grid grid={assignedGrid} />
          <InputField setInput={setInput} />
        </div>
        <div className='container-b'>
          <WordDisplay foundWords={foundWords} />
        </div>
      </div>
    </div>
  )
}

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}

export default App
