import React from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import WordDisplay from '../WordDisplay/WordDisplay'
import './PostGame.scss'

export const PostGame = ({ startGame, score, foundWords }) => {
  return (
    <div className='post-game' data-testid='post-game'>
      <TimerWrapper endTimerFunction={startGame} />
      <div className='container-b'>
        <ScoreDisplay score={score} />
        <WordDisplay foundWords={foundWords} />
      </div>
    </div>
  )
}
