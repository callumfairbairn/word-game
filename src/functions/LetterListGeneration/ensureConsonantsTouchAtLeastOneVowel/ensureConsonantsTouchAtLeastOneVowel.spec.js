import { DEFAULT_LETTER_LIST, VOWELS } from '../../../common/constants'
import {
  doesListContainVowel,
  ensureConsonantsTouchAtLeastOneVowel,
  putSetOfAdjacentLettersBackIn
} from './ensureConsonantsTouchAtLeastOneVowel'
import { runAssertionOneHundredTimes } from '../../RunAssertionOneHundredTimes/runAssertionOneHundredTimes'
import { returnAdjacentLetters } from '../common/returnAdjacentLetters'

describe('ensureConsonantsTouchAtLeastOneVowel', () => {
  it('puts a vowel next to H in the default letterList or turns H into vowel', () => {
    const letterList = [...DEFAULT_LETTER_LIST]
    ensureConsonantsTouchAtLeastOneVowel(letterList)
    const adjacentLettersToH = returnAdjacentLetters(letterList, 7)

    const assertion = () => {
      expect(
        doesListContainVowel(adjacentLettersToH.map(adjacentLetter => adjacentLetter.letter)) ||
          VOWELS.includes(letterList[7])
      ).toEqual(true)
    }
    runAssertionOneHundredTimes(assertion)
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
