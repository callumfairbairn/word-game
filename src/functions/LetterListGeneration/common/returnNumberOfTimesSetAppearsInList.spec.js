import { HARD_LETTERS, VOWELS } from '../../../common/constants'
import { returnNumberOfTimesSetAppearsInList } from './returnNumberOfTimesSetAppearsInList'

describe('returnNumberOfTimesSetAppearsInList', () => {
  describe('vowels', () => {
    it('returns zero when no vowels are present', () => {
      const letterList = ['X', 'Y', 'Z']
      expect(returnNumberOfTimesSetAppearsInList(letterList, VOWELS)).toEqual(0)
    })

    it('returns correct number of vowels when vowels are present', () => {
      const letterList = ['A', 'B', 'C']
      expect(returnNumberOfTimesSetAppearsInList(letterList, VOWELS)).toEqual(1)

      const letterList2 = ['E', 'E', 'I']
      expect(returnNumberOfTimesSetAppearsInList(letterList2, VOWELS)).toEqual(3)
    })
  })

  describe('hard letters', () => {
    it('returns zero when no hard letters are present', () => {
      const letterList = ['A', 'B', 'C']
      expect(returnNumberOfTimesSetAppearsInList(letterList, HARD_LETTERS)).toEqual(0)
    })

    it('returns correct number of hard letters when hard letters are present', () => {
      const letterList = ['X', 'Y', 'Z']
      expect(returnNumberOfTimesSetAppearsInList(letterList, HARD_LETTERS)).toEqual(2)
    })
  })
})
