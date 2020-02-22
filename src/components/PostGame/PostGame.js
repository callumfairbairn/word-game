import React from 'react'
import TimerWrapper from '../Timer/TimerWrapper'
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay'
import WordDisplay from '../WordDisplay/WordDisplay'
import './PostGame.scss'
import { POST_GAME_STARTING_TIME } from '../../common/constants'
import { HeatMap } from '../HeatMap/HeatMap'

export const PostGame = ({ startGame, score, foundWords, letterList, heatMap }) => {
  return (
    <div className='post-game' data-testid='post-game'>
      <TimerWrapper endTimerFunction={startGame} startingTime={POST_GAME_STARTING_TIME} />
      <div className='container-b'>
        <ScoreDisplay score={score} />
        <HeatMap letterList={letterList} heatMap={heatMap} />
        <WordDisplay foundWords={foundWords} />
      </div>
    </div>
  )
}
