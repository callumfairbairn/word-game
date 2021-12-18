import { getNextLetter } from './getNextLetter'
import { findPossibleWords } from './findPossibleWords'
import { arrayToString } from './arrayToString'
import { nextDirectionMap } from './nextDirectionMap'

export const recursivelyFindWords = (currentChain, foundWords, possibleWords, direction, grid) => {
  const currentLetter = currentChain[currentChain.length - 1]
  const nextLetter = getNextLetter(currentLetter.location, direction, grid)
  if (nextLetter !== undefined) {
    if (!currentChain.includes(nextLetter)) {
      currentChain.push(nextLetter)
      const currentChainAsString = arrayToString(currentChain.map(letter => letter.letter))

      const newPossibleWords = findPossibleWords(currentChainAsString, possibleWords)

      if (newPossibleWords.length > 0) {
        if (currentChainAsString.length > 2 && possibleWords.indexOf(currentChainAsString) !== -1) {
          if (!foundWords.includes(currentChainAsString)) {
            foundWords.push(currentChainAsString)
          }
        }

        let newDirection = 'right'
        do {
          recursivelyFindWords(currentChain, foundWords, possibleWords, newDirection, grid)
          newDirection = nextDirectionMap[newDirection]
        } while (newDirection !== 'right')
      }
      currentChain.pop()
    }
  }
}
