import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/LetterListGeneration/generateRandomLetterList'
import { generateGrid } from './functions/GridGeneration/generateGrid'
import { findWords } from './functions/FindWords/findWords'
import { SharedStateLayer } from './components/SharedStateLayer/SharedStateLayer'

const App = () => {
  const dict = require('./words')

  const [letterList, setLetterList] = useState(generateRandomLetterList())
  const [gameRunning, setGameRunning] = useState(true)

  const possibleWords = findWords(generateGrid(letterList), dict)

  return (
    <div className='App'>
      <SharedStateLayer
        letterList={letterList}
        setLetterList={setLetterList}
        gameRunning={gameRunning}
        setGameRunning={setGameRunning}
        possibleWords={possibleWords}
      />
    </div>
  )
}

export default App
