import { DEFAULT_LETTER_LIST, VOWELS } from '../../../common/constants'
import {
  doesListContainVowel,
  ensureConsonantsTouchAtLeastOneVowel,
  putSetOfAdjacentLettersBackIn, returnAdjacentLettersInList
} from './ensureConsonantsTouchAtLeastOneVowel'
import { runAssertionOneHundredTimes } from '../../RunAssertionOneHundredTimes/runAssertionOneHundredTimes'

describe('ensureConsonantsTouchAtLeastOneVowel', () => {
  it('puts a vowel next to H in the default letterList or turns H into vowel', () => {
    const letterList = [...DEFAULT_LETTER_LIST]
    ensureConsonantsTouchAtLeastOneVowel(letterList)
    const adjacentLettersToH = returnAdjacentLettersInList(letterList, 7)

    const assertion = () => {
      expect(
        doesListContainVowel(adjacentLettersToH.map(adjacentLetter => adjacentLetter.letter)) ||
          VOWELS.includes(letterList[7])
      ).toEqual(true)
    }
    runAssertionOneHundredTimes(assertion)
  })
})

describe('returnAdjacentLettersInList', () => {
  it('returns above, below, left and right of given letter', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 5
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'B', direction: 'up' },
      { letter: 'G', direction: 'right' },
      { letter: 'J', direction: 'down' },
      { letter: 'E', direction: 'left' }
    ])
  })

  it('returns right and below if given top left corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 0
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'B', direction: 'right' },
      { letter: 'E', direction: 'down' }
    ])
  })

  it('returns above and left if given bottom right corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 15
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'L', direction: 'up' },
      { letter: 'O', direction: 'left' }
    ])
  })

  it('returns above, below and left if letter is on right edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 7
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'D', direction: 'up' },
      { letter: 'L', direction: 'down' },
      { letter: 'G', direction: 'left' }
    ])
  })

  it('returns above, below and right if letter is on left edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 4
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'A', direction: 'up' },
      { letter: 'F', direction: 'right' },
      { letter: 'I', direction: 'down' }
    ])
  })
})

describe('doesListContainVowel', () => {
  it('returns false for a list not containing a vowel', () => {
    const letterList = ['X', 'Y', 'Z']
    expect(doesListContainVowel(letterList)).toEqual(false)
  })

  it('returns true for a list containing a vowel', () => {
    const letterList = ['X', 'O', 'Z']
    expect(doesListContainVowel(letterList)).toEqual(true)
  })
})

describe('putSetOfAdjacentLettersBackIn', () => {
  it('changes the original letterList', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 0
    const adjacentLetters = [{ letter: 'X', direction: 'right' }, { letter: 'Y', direction: 'down' }]

    putSetOfAdjacentLettersBackIn(adjacentLetters, position, letterList)

    expect(letterList).toEqual(['A', 'X', 'C', 'D', 'Y', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'])
  })
})
