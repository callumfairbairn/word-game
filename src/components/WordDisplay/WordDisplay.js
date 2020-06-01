import React from 'react'
import './WordDisplay.scss'

const WordDisplay = ({ foundWords, possibleWords }) => {
  return (
    <div className='word-display' data-testid='word-display'>
      <div className='title'>
        Found words
      </div>
      <div className='number-of-words'>
        <div>
          {foundWords.length}/{possibleWords.length}
        </div>
      </div>
      <div className='found-words'>
        {foundWords.map(word => { return <div key={word}>{word}</div> })}
      </div>
    </div>
  )
}

export default WordDisplay
