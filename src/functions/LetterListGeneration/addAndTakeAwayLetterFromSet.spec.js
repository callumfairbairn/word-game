import { HARD_LETTERS, VOWELS } from '../../common/constants'
import { addLetterFromSet, takeAwayLetterFromSet } from './addAndTakeAwayLetterFromSet'
import { returnNumberOfTimesSetAppearsInList } from './returnNumberOfTimesSetAppearsInList'

describe('addLetterFromSet', () => {
  describe('vowels', () => {
    it('adds a vowel to a list of letters', () => {
      const letterList = ['X', 'Y', 'Z']
      const set = VOWELS
      addLetterFromSet(letterList, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(1)
    })

    it('does not replace vowels that are already there', () => {
      const letterList = ['A', 'B', 'C']
      const set = VOWELS
      addLetterFromSet(letterList, set)
      expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(2)
    })
  })
})

describe('takeAwayLetterFromSet', () => {
  it('takes away hard letter from a list of letters', () => {
    const letterList = ['X', 'B', 'C']
    const set = HARD_LETTERS
    takeAwayLetterFromSet(letterList, set)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(0)
  })
})
