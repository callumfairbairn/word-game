import { DEFAULT_LETTER_LIST, VOWELS } from '../../../common/constants'
import { ensureConsonantsTouchAtLeastOneVowel } from './ensureConsonantsTouchAtLeastOneVowel'
import { returnAdjacentLettersInList } from './returnAdjacentLettersInList'
import { doesListContainVowel } from './doesListContainVowel'
import { runAssertionOneHundredTimes } from '../../RunAssertionOneHundredTimes/runAssertionOneHundredTimes'

describe('ensureConsonantsTouchAtLeastOneVowel', () => {
  it('puts a vowel next to H in the default letterList or turns H into vowel', () => {
    const letterList = DEFAULT_LETTER_LIST
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
