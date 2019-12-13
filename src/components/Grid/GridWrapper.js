import { generateGrid } from '../../functions/Generation/generation'
import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'
import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import WordDisplay from '../WordDisplay/WordDisplay'
import React, { useState, useEffect } from 'react'

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

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}

export default GridWrapper
