import { returnNumberOfTimesSetAppearsInList } from '../common/returnNumberOfTimesSetAppearsInList'
import { takeAwayLetterFromSet } from '../common/addAndTakeAwayLetterFromSet'
import { HARD_LETTERS, MAX_NUMBER_OF_HARD_LETTERS } from '../../../common/constants'

export const reduceNumberOfHardLetters = (letterList) => {
  for (let x = returnNumberOfTimesSetAppearsInList(letterList, HARD_LETTERS); x > MAX_NUMBER_OF_HARD_LETTERS; x--) {
    takeAwayLetterFromSet(letterList, HARD_LETTERS)
  }
}
