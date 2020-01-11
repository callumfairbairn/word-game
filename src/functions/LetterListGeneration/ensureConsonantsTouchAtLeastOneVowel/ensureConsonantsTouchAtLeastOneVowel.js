import { CONSONANTS, VOWELS } from '../../../common/constants'
import { addLetterFromSet } from '../common/addAndTakeAwayLetterFromSet'
import { returnAdjacentLetters } from '../common/returnAdjacentLetters'

export const ensureConsonantsTouchAtLeastOneVowel = (letterList) => {
  letterList.map((letter, position) => {
    if (CONSONANTS.includes(letter)) {
      const adjacentLetters = returnAdjacentLetters(letterList, position)
      const adjacentLettersWithoutDirection = adjacentLetters.map(adjacentLetter => adjacentLetter.letter)

      if (!doesListContainVowel(adjacentLettersWithoutDirection)) {
        addLetterFromSet(adjacentLettersWithoutDirection, VOWELS)

        adjacentLettersWithoutDirection.map((adjacentLetter, adjacentLetterPosition) => {
          adjacentLetters[adjacentLetterPosition].letter = adjacentLetter
        })

        putSetOfAdjacentLettersBackIn(adjacentLetters, position, letterList)
      }
    }
  })
}

export const doesListContainVowel = (letterList) => {
  for (let x = 0; x < letterList.length; x++) {
    if (VOWELS.includes(letterList[x])) {
      return true
    }
  }
  return false
}

export const putSetOfAdjacentLettersBackIn = (adjacentLetters, position, letterList) => {
  adjacentLetters.map((adjacentLetter) => {
    if (adjacentLetter.direction === 'up') {
      letterList[position - 4] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'right') {
      letterList[position + 1] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'down') {
      letterList[position + 4] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'left') {
      letterList[position - 1] = adjacentLetter.letter
    }
  })
}
