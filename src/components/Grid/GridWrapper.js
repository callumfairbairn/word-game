import { generateGrid } from '../../functions/Generation/generation'
import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'
import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import WordDisplay from '../WordDisplay/WordDisplay'
import React, { useState, useEffect } from 'react'

const GridWrapper = ({ letterListHook, foundWordsHook, inputHook, dict, resetInputField }) => {
  const [letterList] = letterListHook
  const [foundWords, setFoundWords] = foundWordsHook
  const [input, setInput] = inputHook

  const blankGrid = generateGrid(letterList)
  const [grid, setGrid] = useState(blankGrid)
  const [gridMask, setGridMask] = useState(blankGrid)

  const paths = createPaths(blankGrid, input)

  useEffect(() => {
    const wordStatus = calculateWordStatus(input, dict, foundWords, false)
    setGrid(assignLetterStatus(blankGrid, paths, wordStatus))
    if (input.length > 2) {
      setGridMask(generateGrid((letterList)))
    }
  }, [input, letterList])

  const onFormSubmit = (event) => {
    event.preventDefault()
    const newWordStatus = calculateWordStatus(input, dict, foundWords, true)

    if (newWordStatus === 'correct' && paths.length > 0) {
      setGridMask(assignLetterStatus(blankGrid, paths, newWordStatus))
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

export default GridWrapper
