import React, { useState } from 'react'
import './App.scss'
import { Grid } from './components/Grid/Grid'
import { InputField } from './components/InputField/InputField'
import { generateRandomLetterList } from './functions/Generation/generation'
import WordDisplay from './components/WordDisplay/WordDisplay'

function App () {
  const dict = require('./words')
  const letterList = generateRandomLetterList()
  return (
    <GridWrapper letterList={letterList} dict={dict} />
  )
}

const GridWrapper = ({ letterList, dict }) => {
  const [input, setInput] = useState('')
  const [foundWords, setFoundWords] = useState([])

  return (
    <div className='App'>
      <div className='outer-container'>
        <div className='container-a'>
          <Grid letterList={letterList} input={input} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
          <InputField setInput={setInput} />
        </div>
        <div className='container-b'>
          <WordDisplay foundWords={foundWords} />
        </div>
      </div>
    </div>
  )
}

export default App
