import React from 'react'
import './PossibleWordsDisplay.scss'

export const PossibleWordsDisplay = ({ foundWords, possibleWords }) => {
  const filteredPossibleWords = sortByLength(possibleWords.filter(word => !foundWords.includes(word)))

  return (
    <div className='possible-words-display'>
      <div className='title'>
          Missed words
      </div>
      <div className='missed-words'>
        {filteredPossibleWords.map(word => { return <div key={word}>{word}</div> })}
      </div>
    </div>
  )
}

const sortByLength = (array) => {
  return array.sort((a, b) => { return b.length - a.length })
}
