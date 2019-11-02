import React from 'react'
import './WordDisplay.scss'

const WordDisplay = ({ foundWords }) => {
  return (
    <div className='word-display' data-testid='word-display'>
      {foundWords.map(word => { return <div key={word}>{word}</div> })}
    </div>
  )
}

export default WordDisplay
