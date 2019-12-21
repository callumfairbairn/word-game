import { VOWELS } from '../../common/constants'
import { returnNumberOfTimesSetAppearsInList } from './returnNumberOfTimesSetAppearsInList'
import { addLetterFromSet } from './addAndTakeAwayLetterFromSet'

export const fixLetters = (letterList, correctNumberOfLettersInSet, set) => {
  if (set === VOWELS) {
    for (let x = returnNumberOfTimesSetAppearsInList(letterList, set); x < correctNumberOfLettersInSet; x++) {
      addLetterFromSet(letterList, set)
    }
  }
}
