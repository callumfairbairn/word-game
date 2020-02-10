import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'
import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import React, { useState, useEffect } from 'react'
import {
  resetGridMask,
  resetInput,
  resetInputField,
  updateFoundWords,
  updateScore,
  updateHeatMap
} from './GridWrapperHelperFunctions'

const GridWrapper = ({ foundWordsHook, inputHook, scoreHook, letterList, heatMeapHook }) => {
  const dict = require('../../words')

  const [foundWords, setFoundWords] = foundWordsHook
  const [input, setInput] = inputHook
  const [score, setScore] = scoreHook

  const blankGrid = generateGrid(letterList)
  const paths = createPaths(blankGrid, input)

  const [grid, setGrid] = useState(blankGrid)
  const [gridMask, setGridMask] = useState(blankGrid)

  const returnWordStatus = (userHasPressedReturn) => {
    return calculateWordStatus(input, dict, foundWords, userHasPressedReturn)
  }

  const drawPathsOnGrid = (gridSetterFunction, wordStatus) => {
    gridSetterFunction(assignLetterStatus(blankGrid, paths, wordStatus))
  }

  const onFormSubmit = (event) => {
    const wordStatus = returnWordStatus(true)

    event.preventDefault()
    resetInput(setInput, resetInputField)
    drawPathsOnGrid(setGridMask, wordStatus)

    if (wordStatus === 'correct' && paths.length > 0) {
      updateFoundWords(foundWords, setFoundWords, input)
      updateScore(score, setScore, input)
      updateHeatMap(heatMeapHook, paths)
    }
  }

  useEffect(() => {
    resetGridMask(input, setGridMask, blankGrid)
    drawPathsOnGrid(setGrid, returnWordStatus(false))
  }, [input, letterList])

  return (
    <div className='grid-wrapper'>
      <div className='grid-container'>
        <Grid grid={grid} gridType='default' />
        <Grid grid={gridMask} gridType='mask' />
      </div>
      <InputField setInput={setInput} onFormSubmit={onFormSubmit} />
    </div>
  )
}

export default GridWrapper
