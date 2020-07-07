import React, { useState } from 'react'
import './App.scss'
import { generateGrid } from './functions/GridGeneration/generateGrid'
import { findWords } from './functions/FindWords/findWords'
import { Game } from './components/Game/Game'

const App = (data) => {
  const dict = require('./words')

  const [letterList, setLetterList] = useState(data.data['letter_list'])

  const possibleWords = findWords(generateGrid(letterList), dict)

  return (
    <div className='App'>
      <Game
        letterList={letterList}
        setLetterList={setLetterList}
        possibleWords={possibleWords}
      />
    </div>
  )
}

export default App
