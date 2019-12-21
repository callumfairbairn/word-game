import { HARD_LETTERS, MAX_NUMBER_OF_HARD_LETTERS } from '../../../common/constants'
import { returnNumberOfTimesSetAppearsInList } from '../common/returnNumberOfTimesSetAppearsInList'
import { reduceNumberOfHardLetters } from './reduceNumberOfHardLetters'

describe('reduceNumberOfHardLetters', () => {
  it('does not change letter list when correct number of hard letters is passed in', () => {
    const letterList = ['J', 'O', 'Z', 'Q']
    const set = HARD_LETTERS
    reduceNumberOfHardLetters(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(MAX_NUMBER_OF_HARD_LETTERS)
  })

  it('takes away hard letters up to the correct number of hard letters', () => {
    const letterList = ['J', 'A', 'Z', 'X', 'Q']
    const set = HARD_LETTERS
    reduceNumberOfHardLetters(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(MAX_NUMBER_OF_HARD_LETTERS)
  })
})
