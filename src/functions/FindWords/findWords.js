import { recursivelyFindWords } from './recursivelyFindWords'
import { nextDirectionMap } from './nextDirectionMap'
import { findPossibleWords } from './findPossibleWords'

export const findWords = (grid, dict) => {
  const foundWords = []

  grid.forEach(row => {
    row.forEach((startingLetter) => {
      let newDirection = 'right'
      do {
        const possibleWords = findPossibleWords(startingLetter.letter.toLowerCase(), dict.words)
        recursivelyFindWords([startingLetter], foundWords, possibleWords, newDirection, grid)
        newDirection = nextDirectionMap[newDirection]
      } while (newDirection !== 'up')
    })
  })

  return foundWords
}
