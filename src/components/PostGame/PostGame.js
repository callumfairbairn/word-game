import React from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import './PostGame.scss'
import { POST_GAME_STARTING_TIME } from '../../common/constants'

export const PostGame = ({ restartGame, children }) => {
  return (
    <div className='post-game' data-testid='post-game'>
      <TimerWrapper endTimerFunction={restartGame} startingTime={POST_GAME_STARTING_TIME} />
      <div className='container-b'>
        {children}
      </div>
    </div>
  )
}
