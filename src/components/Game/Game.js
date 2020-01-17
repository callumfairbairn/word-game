import React, { useState } from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import GridWrapper from '../Grid/GridWrapper'

export const Game = ({ letterListHook, foundWordsHook, scoreHook }) => {
  const inputHook = useState('')

  const dict = require('../../words')

  return (
    <div className='game'>
      <TimerWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} resetInputField={resetInputField} />
      <GridWrapper letterListHook={letterListHook} foundWordsHook={foundWordsHook} inputHook={inputHook} scoreHook={scoreHook} dict={dict} resetInputField={resetInputField} />
    </div>
  )
}

const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}
