import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/Generation/generation'
import TimerWrapper from './components/Timer/TimerWrapper'
import GridWrapper from './components/Grid/GridWrapper'

function App () {
  const [letterList, setLetterList] = useState(generateRandomLetterList())
  const [foundWords, setFoundWords] = useState([])
  const [input, setInput] = useState('')
  const dict = require('./words')
  return (
    <div className='App'>
      <div className='container-a'>
        <TimerWrapper setLetterList={setLetterList} setFoundWords={setFoundWords} setInput={setInput} resetInputField={resetInputField} />
        <GridWrapper letterList={letterList} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} input={input} setInput={setInput} resetInputField={resetInputField} />
      </div>
    </div>
  )
}

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}

export default App
