import React, { useState } from 'react'
import './App.scss'
import { Game } from './components/Game/Game'

const App = (data) => {
  const [letterList, setLetterList] = useState(data.data['letter_list'])

  const possibleWords = data.data['found_words']

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
