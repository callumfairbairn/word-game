import { CONSONANTS, VOWELS } from '../../../common/constants'
import { addLetterFromSet } from '../addAndTakeAwayLetterFromSet'

export const ensureConsonantsTouchAtLeastOneVowel = (letterList) => {
  letterList.map((letter, position) => {
    if (CONSONANTS.includes(letter)) {
      const adjacentLetters = returnAdjacentLettersInList(letterList, position)
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

export const returnAdjacentLettersInList = (letterList, position) => {
  const adjacentLetters = []
  if (letterList[position - 4]) {
    adjacentLetters.push(
      {
        letter: letterList[position - 4],
        direction: 'up'
      }
    )
  }
  if (position % 4 < (position + 1) % 4) {
    adjacentLetters.push(
      {
        letter: letterList[position + 1],
        direction: 'right'
      }
    )
  }
  if (letterList[position + 4]) {
    adjacentLetters.push(
      {
        letter: letterList[position + 4],
        direction: 'down'
      }
    )
  }
  if (position % 4 !== 0) {
    adjacentLetters.push(
      {
        letter: letterList[position - 1],
        direction: 'left'
      }
    )
  }
  return adjacentLetters
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
