import { returnNumberOfTimesSetAppearsInList } from '../returnNumberOfTimesSetAppearsInList'
import { addLetterFromSet } from '../addAndTakeAwayLetterFromSet'
import { MIN_NUMBER_OF_VOWELS, VOWELS } from '../../../common/constants'

export const increaseNumberOfVowels = (letterList) => {
  for (let x = returnNumberOfTimesSetAppearsInList(letterList, VOWELS); x < MIN_NUMBER_OF_VOWELS; x++) {
    addLetterFromSet(letterList, VOWELS)
  }
}
