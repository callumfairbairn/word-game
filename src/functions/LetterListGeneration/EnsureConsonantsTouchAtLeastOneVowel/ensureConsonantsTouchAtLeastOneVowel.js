import { CONSONANTS, VOWELS } from '../../../common/constants'
import { doesListContainVowel } from './doesListContainVowel'
import { returnAdjacentLettersInList } from './returnAdjacentLettersInList'
import { addLetterFromSet } from '../addAndTakeAwayLetterFromSet'
import { putSetOfAdjacentLettersBackIn } from './putSetOfAdjacentLettersBackIn'

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
