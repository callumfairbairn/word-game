import { generateFreshHeatMapArray } from '../../functions/calculateHeatMap/generateFreshHeatMapArray'
import React, { useState } from 'react'
import { Game } from '../Game/Game'
import { PostGame } from '../PostGame/PostGame'
import { generateRandomLetterList } from '../../functions/LetterListGeneration/generateRandomLetterList'

export const SharedStateLayer = ({ letterList, setLetterList, possibleWords }) => {
  const foundWordsHook = useState([])
  const scoreHook = useState(0)
  const heatMapHook = useState(generateFreshHeatMapArray())

  const [gameRunning, setGameRunning] = useState(true)
  const [foundWords, setFoundWords] = foundWordsHook
  const [score, setScore] = scoreHook
  const [heatMap] = heatMapHook

  const startGame = () => {
    setLetterList(generateRandomLetterList())
    setGameRunning(true)
    setFoundWords([])
    setScore(0)
  }

  return (
    <div>
      {
        gameRunning ? (
          <Game
            foundWordsHook={foundWordsHook}
            scoreHook={scoreHook}
            letterList={letterList}
            setGameRunning={setGameRunning}
            heatMapHook={heatMapHook}
            possibleWords={possibleWords}
          />
        ) : (
          <PostGame
            startGame={startGame}
            score={score}
            foundWords={foundWords}
            letterList={letterList}
            heatMap={heatMap}
            possibleWords={possibleWords}
          />
        )
      }
    </div>
  )
}
