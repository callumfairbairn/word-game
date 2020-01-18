import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/LetterListGeneration/generateRandomLetterList'
import { Game } from './components/Game/Game'
import { PostGame } from './components/PostGame/PostGame'

const App = () => {
  const [letterList, setLetterList] = useState(generateRandomLetterList())
  const [gameRunning, setGameRunning] = useState(true)

  const foundWordsHook = useState([])
  const scoreHook = useState(0)

  const [foundWords, setFoundWords] = foundWordsHook
  const [score, setScore] = scoreHook

  const startGame = () => {
    setLetterList(generateRandomLetterList())
    setGameRunning(true)
    setFoundWords([])
    setScore(0)
  }

  return (
    <div className='App'>
      {
        gameRunning ? <Game foundWordsHook={foundWordsHook} scoreHook={scoreHook} letterList={letterList} setGameRunning={setGameRunning} />
          : <PostGame startGame={startGame} score={score} foundWords={foundWords} />
      }
    </div>
  )
}

export default App
