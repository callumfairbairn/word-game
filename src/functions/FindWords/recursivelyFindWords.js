import { getNextLetter } from "./getNextLetter";
import { findPossibleWords } from "./findPossibleWords";
import { arrayToString } from "./arrayToString";
import { nextDirectionMap } from "./nextDirectionMap";

export const recursivelyFindWords = (currentChain, foundWords, direction, grid, dict) => {
  const currentLetter = currentChain[currentChain.length - 1]
  const nextLetter = getNextLetter(currentLetter.location, direction, grid)
  if (nextLetter !== undefined) {
    if (!currentChain.includes(nextLetter)) {
      currentChain.push(nextLetter)
      const currentChainAsString = arrayToString(currentChain.map(letter => letter.letter))
      const possibleWords = findPossibleWords(currentChainAsString, dict)

      if (possibleWords.length > 0) {
        if (currentChainAsString.length > 2 && dict.words.indexOf(currentChainAsString) !== -1) {
          foundWords.push(currentChainAsString)
        }

        let newDirection = 'right'
        do {
          recursivelyFindWords(currentChain, foundWords, newDirection, grid, dict)
          newDirection = nextDirectionMap[newDirection]
        } while (newDirection !== 'right')

      }
      currentChain.pop()
    }
  }
}