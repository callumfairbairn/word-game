import React, { useState } from 'react'
import './App.scss'
import TimerWrapper from './components/Timer/TimerWrapper'
import GridWrapper from './components/Grid/GridWrapper'
import { generateRandomLetterList } from './functions/LetterListGeneration/generateRandomLetterList'

function App () {
  const letterListHook = useState(generateRandomLetterList())
  const foundWordsHook = useState([])
  const inputHook = useState('')
  const scoreHook = useState(0)

  const dict = require('./words')

  return (
    <div className='App'>
      <div className='container-a'>
        <TimerWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} resetInputField={resetInputField} />
        <GridWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} dict={dict} resetInputField={resetInputField} />
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
