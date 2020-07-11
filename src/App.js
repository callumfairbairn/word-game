import React from 'react'
import './App.scss'
import { Game } from './components/Game/Game'

const App = ({ data, setData, gameRunning, setGameRunning }) => {
  const letterList = data.letter_list
  const possibleWords = data.found_words

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
