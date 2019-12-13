import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/Generation/generation'
import TimerWrapper from './components/Timer/TimerWrapper'
import GridWrapper from './components/Grid/GridWrapper'

function App () {
  const [letterList, setLetterList] = useState(generateRandomLetterList())
  const [foundWords, setFoundWords] = useState([])
  const dict = require('./words')
  return (
    <div className='App'>
      <div className='container-a'>
        <TimerWrapper setLetterList={setLetterList} setFoundWords={setFoundWords} />
        <GridWrapper letterList={letterList} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
      </div>
    </div>
  )
}

export default App
