import { generateFreshHeatMapArray } from '../../functions/calculateHeatMap/generateFreshHeatMapArray'
import React, { useState } from 'react'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import GridWrapper from '../Grid/GridWrapper'
import { HeatMap } from '../HeatMap/HeatMap'
import { PossibleWordsDisplay } from '../PossibleWordsDisplay/PossibleWordsDisplay'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import {
  drawPathsOnGrid,
  resetGridMask,
  resetInput,
  resetInputField,
  updateFoundWords,
  updateHeatMap,
  updateScore
} from './gameHelperFunctions'
import TimerWrapper from '../Timer/TimerWrapper'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import createPaths from '../../functions/PathCreation/createPaths'
import { InputField } from '../InputField/InputField'

export const Game = ({ letterList, possibleWords, setData, gameRunning, setGameRunning }) => {
  const dict = require('../../words')

  const [foundWords, setFoundWords] = useState([])
  const [score, setScore] = useState(0)
  const [heatMap, setHeatMap] = useState(generateFreshHeatMapArray())
  const [input, setInput] = useState('')

  const blankGrid = generateGrid(letterList)
  const paths = createPaths(blankGrid, input)

  const handleSubmittedInput = (setGridMask) => (event) => {
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

  const handleAnyInput = (setGrid, setGridMask) => {
    const wordStatus = calculateWordStatus(input, dict, foundWords, false)

    resetGridMask(input, setGridMask, blankGrid)
    drawPathsOnGrid(setGrid, blankGrid, paths, wordStatus)
  }

  const restartGame = () => {
    setData(null)
    setGameRunning(true)
  }

  const stopGame = () => {
    setGameRunning(false)
  }

  return (
    <div>
      {
        gameRunning ? (
          <div className='game'>
            <TimerWrapper endTimerFunction={stopGame} gameRunning={gameRunning} />
            <div className='container-b'>
              <ScoreDisplay score={score} />
              <GridWrapper
                setInput={setInput}
                blankGrid={blankGrid}
                handleSubmittedInput={handleSubmittedInput}
                handleAnyInput={handleAnyInput}
              >
                {onFormSubmit => <InputField setInput={setInput} onFormSubmit={onFormSubmit} />}
              </GridWrapper>
              <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
            </div>
          </div>
        ) : (
          <div className='post-game' data-testid='post-game'>
            <TimerWrapper endTimerFunction={restartGame} gameRunning={gameRunning} />
            <div className='container-b'>
              <ScoreDisplay score={score} />
              <HeatMap blankGrid={blankGrid} heatMap={heatMap} />
              <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
              <PossibleWordsDisplay foundWords={foundWords} possibleWords={possibleWords} />
            </div>
          </div>
        )
      }
    </div>
  )
}
