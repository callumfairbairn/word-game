import { VOWELS } from '../../common/constants'
import { fixLetters } from './fixLetters'
import { returnNumberOfTimesSetAppearsInList } from './returnNumberOfTimesSetAppearsInList'

describe('fixLetters', () => {
  describe('VOWELS', () => {
    it('does not change letter list when correct number of vowels is passed in', () => {
      const letterList = ['A', 'B', 'C']
      const correctNumberOfVowels = 1
      const set = VOWELS
      fixLetters(letterList, correctNumberOfVowels, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(correctNumberOfVowels)
    })

    it('adds vowels up to the correct number of vowels', () => {
      const letterList = ['G', 'B', 'C', 'F']
      const correctNumberOfVowels = 3
      const set = VOWELS
      fixLetters(letterList, correctNumberOfVowels, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(3)
    })
  })
})
