import { generateFreshHeatMapArray } from '../../functions/calculateHeatMap/generateFreshHeatMapArray'
import React, { useState } from 'react'
import { generateRandomLetterList } from '../../functions/LetterListGeneration/generateRandomLetterList'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import GridWrapper from '../Grid/GridWrapper'
import { HeatMap } from '../HeatMap/HeatMap'
import { PossibleWordsDisplay } from '../PossibleWordsDisplay/PossibleWordsDisplay'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import { resetInputField } from '../Grid/GridWrapperHelperFunctions'
import TimerWrapper from '../Timer/TimerWrapper'

export const Game = ({ letterList, setLetterList, possibleWords }) => {
  const [foundWords, setFoundWords] = useState([])
  const [score, setScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(true)
  const [heatMap, setHeatMap] = useState(generateFreshHeatMapArray())
  const [input, setInput] = useState('')

  const restartGame = () => {
    setLetterList(generateRandomLetterList())
    setFoundWords([])
    setScore(0)
    setGameRunning(true)
  }

  const stopGame = () => {
    setInput('')
    resetInputField()
    setGameRunning(false)
  }

  const blankGrid = generateGrid(letterList)

  return (
    <div>
      {
        gameRunning ? (
          <div className='game'>
            <TimerWrapper endTimerFunction={stopGame} gameRunning={gameRunning} />
            <div className='container-b'>
              <ScoreDisplay score={score} />
              <GridWrapper
                foundWords={foundWords}
                setFoundWords={setFoundWords}
                score={score}
                setScore={setScore}
                heatMap={heatMap}
                setHeatMap={setHeatMap}
                input={input}
                setInput={setInput}
                blankGrid={blankGrid}
              />
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
