import React, { useEffect } from 'react'
import './App.scss'
import { Game } from './components/Game/Game'
import axios from 'axios'

const App = ({ data, setData, gameRunning, setGameRunning }) => {
  const letterList = data.letter_list
  const possibleWords = data.found_words

  useEffect(() => {
    if (gameRunning) {
      axios.get(`http://localhost:3030/update/${Date.now()}`)
    }
  }, [gameRunning])

  return (
    <div className='App' data-testid='app'>
      <Game
        letterList={letterList}
        possibleWords={possibleWords}
        setData={setData}
        gameRunning={gameRunning}
        setGameRunning={setGameRunning}
      />
    </div>
  )
}

export default App
