import { MIN_NUMBER_OF_VOWELS, VOWELS } from '../../../common/constants'
import { returnNumberOfTimesSetAppearsInList } from '../returnNumberOfTimesSetAppearsInList'
import { increaseNumberOfVowels } from './increaseNumberOfVowels'

describe('increaseNumberOfVowels', () => {
  it('does not change letter list when correct number of vowels is passed in', () => {
    const letterList = ['A', 'B', 'C', 'E', 'A', 'I', 'O', 'U']
    const set = VOWELS
    increaseNumberOfVowels(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(MIN_NUMBER_OF_VOWELS)
  })

  it('adds vowels up to the correct number of vowels', () => {
    const letterList = ['G', 'B', 'C', 'F', 'X', 'V', 'N', 'M']
    const set = VOWELS
    increaseNumberOfVowels(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(MIN_NUMBER_OF_VOWELS)
  })
})
