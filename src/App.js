import React from 'react'
import './App.scss'
import { Game } from './components/Game/Game'
import { generateRandomLetterList } from './functions/LetterListGeneration/generateRandomLetterList'
import { findWords } from './functions/FindWords/findWords'
import { generateGrid } from './functions/GridGeneration/generateGrid'

const App = ({ gameRunning, setGameRunning }) => {
  const dict = require('./words.json')
  const letterList = generateRandomLetterList()
  const possibleWords = findWords(generateGrid(letterList), dict)
  console.log(possibleWords)


  return (
    <div className='App' data-testid='app'>
      <Game
        letterList={letterList}
        possibleWords={possibleWords}
        gameRunning={gameRunning}
        setGameRunning={setGameRunning}
      />
    </div>
  )
}

export default App
