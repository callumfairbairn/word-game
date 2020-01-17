import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/LetterListGeneration/generateRandomLetterList'
import { Game } from './components/Game/Game'

const App = () => {
  const letterListHook = useState(generateRandomLetterList())
  const foundWordsHook = useState([])
  const scoreHook = useState(0)

  return (
    <div className='App'>
      <Game letterListHook={letterListHook} foundWordsHook={foundWordsHook} scoreHook={scoreHook} />
    </div>
  )
}

export default App
