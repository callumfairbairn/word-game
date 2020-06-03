import { generateFreshHeatMapArray } from '../../functions/calculateHeatMap/generateFreshHeatMapArray'
import React, { useState } from 'react'
import { Game } from '../Game/Game'
import { PostGame } from '../PostGame/PostGame'
import { generateRandomLetterList } from '../../functions/LetterListGeneration/generateRandomLetterList'
import WordDisplay from '../WordDisplay/WordDisplay'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import GridWrapper from '../Grid/GridWrapper'
import { HeatMap } from '../HeatMap/HeatMap'
import { PossibleWordsDisplay } from '../PossibleWordsDisplay/PossibleWordsDisplay'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'

export const SharedStateLayer = ({ letterList, setLetterList, possibleWords }) => {
  const [foundWords, setFoundWords] = useState([])
  const [score, setScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(true)
  const [heatMap, setHeatMap] = useState(generateFreshHeatMapArray())

  const restartGame = () => {
    setLetterList(generateRandomLetterList())
    setGameRunning(true)
    setFoundWords([])
    setScore(0)
  }

  const blankGrid = generateGrid(letterList)

  return (
    <div>
      {
        gameRunning ? (
          <Game setGameRunning={setGameRunning}>
            {(inputHook) =>
              <>
                <ScoreDisplay score={score} />
                <GridWrapper
                  foundWords={foundWords}
                  setFoundWords={setFoundWords}
                  score={score}
                  setScore={setScore}
                  heatMap={heatMap}
                  setHeatMap={setHeatMap}
                  inputHook={inputHook}
                  blankGrid={blankGrid}
                />
                <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
              </>}
          </Game>
        ) : (
          <PostGame restartGame={restartGame}>
            <ScoreDisplay score={score} />
            <HeatMap blankGrid={blankGrid} heatMap={heatMap} />
            <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
            <PossibleWordsDisplay foundWords={foundWords} possibleWords={possibleWords} />
          </PostGame>
        )
      }
    </div>
  )
}
