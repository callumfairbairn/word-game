import React, { useState } from 'react'
import './App.scss'
import { generateRandomLetterList } from './functions/Generation/generation'
import TimerWrapper from './components/Timer/TimerWrapper'
import GridWrapper from './components/Grid/GridWrapper'

function App () {
  const letterListHook = useState(generateRandomLetterList())
  const foundWordsHook = useState([])
  const inputHook = useState('')
  const dict = require('./words')
  return (
    <div className='App'>
      <div className='container-a'>
        <TimerWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} resetInputField={resetInputField} />
        <GridWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} dict={dict} resetInputField={resetInputField} />
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
