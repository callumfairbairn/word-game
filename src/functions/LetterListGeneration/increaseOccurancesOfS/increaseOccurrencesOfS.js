import { returnNumberOfTimesSetAppearsInList } from '../common/returnNumberOfTimesSetAppearsInList'
import { addLetterFromSet } from '../common/addAndTakeAwayLetterFromSet'
import { returnRandomNumberOfOccurrencesOfS } from './returnRandomNumberOfOccurrencesOfS'

export const increaseOccurrencesOfS = (letterList) => {
  for (let x = returnNumberOfTimesSetAppearsInList(letterList, ['S']); x < returnRandomNumberOfOccurrencesOfS(); x++) {
    addLetterFromSet(letterList, ['S'])
  }
}
