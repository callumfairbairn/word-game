import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import React, { useEffect, useState } from 'react'
import {
  drawPathsOnGrid,
  resetGridMask,
  resetInput,
  resetInputField,
  updateFoundWords, updateHeatMap,
  updateScore
} from './GridWrapperHelperFunctions'

const GridWrapper = ({ foundWords, setFoundWords, score, setScore, heatMap, setHeatMap, inputHook, blankGrid }) => {
  const dict = require('../../words')

  const [input, setInput] = inputHook
  const [grid, setGrid] = useState(blankGrid)
  const [gridMask, setGridMask] = useState(blankGrid)

  const paths = createPaths(blankGrid, input)

  const onFormSubmit = (event) => {
    const wordStatus = calculateWordStatus(input, dict, foundWords, true)

    event.preventDefault()
    resetInput(setInput, resetInputField)
    drawPathsOnGrid(setGridMask, blankGrid, paths, wordStatus)

    if (wordStatus === 'correct' && paths.length > 0) {
      updateFoundWords(foundWords, setFoundWords, input)
      updateScore(score, setScore, input)
      updateHeatMap(heatMap, setHeatMap, paths)
    }
  }

  useEffect(() => {
    const wordStatus = calculateWordStatus(input, dict, foundWords, false)

    resetGridMask(input, setGridMask, blankGrid)
    drawPathsOnGrid(setGrid, blankGrid, paths, wordStatus)
  }, [input, blankGrid])

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
