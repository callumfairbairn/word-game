import React from 'react'
import './WordDisplay.scss'

const WordDisplay = ({ foundWords }) => {
  return (
    <div className='word-display' data-testid='word-display'>
      <div className='number-of-words'>
        {foundWords.length}
      </div>
      <div className='found-words'>
        {foundWords.map(word => { return <div key={word}>{word}</div> })}
      </div>
    </div>
  )
}

export default WordDisplay
