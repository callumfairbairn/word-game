import React from 'react'
import './ScoreDisplay.scss'

export const ScoreDisplay = ({ score = 0 }) => {
  return (
    <div className='score-display' data-testid='score-display'>
      Score
      <div className='score-box'>
        {score}
      </div>
    </div>
  )
}
