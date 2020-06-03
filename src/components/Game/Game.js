import React from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import { resetInputField } from '../Grid/GridWrapperHelperFunctions'
import { GAME_STARTING_TIME } from '../../common/constants'

export const Game = ({ setGameRunning, setInput, children }) => {
  const stopGame = () => {
    setInput('')
    resetInputField()
    setGameRunning(false)
  }

  return (
    <div className='game'>
      <TimerWrapper endTimerFunction={stopGame} startingTime={GAME_STARTING_TIME} />
      <div className='container-b'>
        {children}
      </div>
    </div>
  )
}
