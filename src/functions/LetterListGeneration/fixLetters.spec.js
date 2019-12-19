import { HARD_LETTERS, VOWELS } from '../../common/constants'
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

  describe('HARD_LETTERS', () => {
    it('does not change letter list when correct number of hard letters is passed in', () => {
      const letterList = ['J', 'K', 'Z']
      const maximumNumberOfHardLetters = 2
      const set = HARD_LETTERS
      fixLetters(letterList, maximumNumberOfHardLetters, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(maximumNumberOfHardLetters)
    })

    it('takes away hard letters up to the correct number of hard letters', () => {
      const letterList = ['J', 'A', 'Z', 'X']
      const maximumNumberOfHardLetters = 2
      const set = HARD_LETTERS
      fixLetters(letterList, maximumNumberOfHardLetters, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(2)
    })
  })
})
