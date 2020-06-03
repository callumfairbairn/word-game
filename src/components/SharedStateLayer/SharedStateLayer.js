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

export const SharedStateLayer = ({ letterList, setLetterList, possibleWords }) => {
  const foundWordsHook = useState([])
  const scoreHook = useState(0)
  const heatMapHook = useState(generateFreshHeatMapArray())

  const [gameRunning, setGameRunning] = useState(true)
  const [foundWords, setFoundWords] = foundWordsHook
  const [score, setScore] = scoreHook
  const [heatMap] = heatMapHook

  const restartGame = () => {
    setLetterList(generateRandomLetterList())
    setGameRunning(true)
    setFoundWords([])
    setScore(0)
  }

  return (
    <div>
      {
        gameRunning ? (
          <Game setGameRunning={setGameRunning} >
            {(inputHook) =>
              <>
                <ScoreDisplay score={score} />
                <GridWrapper
                  foundWordsHook={foundWordsHook}
                  scoreHook={scoreHook}
                  heatMapHook={heatMapHook}
                  inputHook={inputHook}
                  letterList={letterList}
                />
                <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
              </>
            }
          </Game>
        ) : (
          <PostGame restartGame={restartGame}>
            <ScoreDisplay score={score} />
            <HeatMap letterList={letterList} heatMap={heatMap} />
            <WordDisplay foundWords={foundWords} possibleWords={possibleWords} />
            <PossibleWordsDisplay foundWords={foundWords} possibleWords={possibleWords} />
          </PostGame>
        )
      }
    </div>
  )
}
