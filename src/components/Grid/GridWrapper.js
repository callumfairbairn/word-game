import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'
import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import React, { useState, useEffect } from 'react'
import { calculateScore } from '../../functions/ScoreCalculation/calculateScore'

const GridWrapper = ({ foundWordsHook, inputHook, scoreHook, letterList, resetInputField }) => {
  const dict = require('../../words')

  const [foundWords, setFoundWords] = foundWordsHook
  const [input, setInput] = inputHook
  const [score, setScore] = scoreHook

  const blankGrid = generateGrid(letterList)
  const [grid, setGrid] = useState(blankGrid)
  const [gridMask, setGridMask] = useState(blankGrid)

  const paths = createPaths(blankGrid, input)

  useEffect(() => {
    const wordStatus = calculateWordStatus(input, dict, foundWords, false)
    setGrid(assignLetterStatus(blankGrid, paths, wordStatus))

    if (input.length > 0) {
      setGridMask(generateGrid((letterList)))
    }
  }, [input, letterList])

  const onFormSubmit = (event) => {
    event.preventDefault()
    setInput('')
    resetInputField()
    const newWordStatus = calculateWordStatus(input, dict, foundWords, true)

    if (paths.length > 0) {
      setGridMask(assignLetterStatus(blankGrid, paths, newWordStatus))
    }

    if (newWordStatus === 'correct' && paths.length > 0) {
      updateFoundWords(foundWords, setFoundWords, input)
      updateScore(score, setScore, input)
    }
  }

  return (
    <div className='grid-wrapper'>
      <div className='grid-container'>
        <Grid grid={grid} />
        <Grid grid={gridMask} mask />
      </div>
      <InputField setInput={setInput} onFormSubmit={onFormSubmit} />
    </div>
  )
}

const updateFoundWords = (foundWords, setFoundWords, input) => {
  const newFoundWords = foundWords
  newFoundWords.push(input)
  setFoundWords(newFoundWords)
}

const updateScore = (score, setScore, input) => {
  setScore(score + calculateScore(input))
}

export default GridWrapper
