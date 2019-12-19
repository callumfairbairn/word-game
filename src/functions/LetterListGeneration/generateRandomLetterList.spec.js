import {
  HARD_LETTERS,
  MAX_NUMBER_OF_HARD_LETTERS,
  MIN_NUMBER_OF_VOWELS,
  VOWELS,
  X_DIM,
  Y_DIM
} from '../../common/constants'
import { generateRandomLetterList } from './generateRandomLetterList'
import { runAssertionOneHundredTimes } from '../RunAssertionOneHundredTimes/runAssertionOneHundredTimes'

describe('generateRandomLetterList', () => {
  it('generates a random list of letters of length equal to X_DIM * Y_DIM', () => {
    runAssertionOneHundredTimes(() => expect(generateRandomLetterList().length).toEqual(X_DIM * Y_DIM))
  })

  it('returns at least six vowels', () => {
    const generateListAndReturnNumberOfVowels = () => {
      let vowelCounter = 0
      generateRandomLetterList().map(letter => {
        if (VOWELS.includes(letter)) { vowelCounter++ }
      })
      return vowelCounter
    }

    runAssertionOneHundredTimes(() => expect(generateListAndReturnNumberOfVowels()).toBeGreaterThan(MIN_NUMBER_OF_VOWELS - 1))
  })

  it('returns no more than 3 hard letters', () => {
    const generateListAndReturnNumberOfHardLetters = () => {
      let hardLetterCounter = 0
      generateRandomLetterList().map(letter => {
        if (HARD_LETTERS.includes(letter)) { hardLetterCounter++ }
      })
      return hardLetterCounter
    }

    runAssertionOneHundredTimes(() => expect(generateListAndReturnNumberOfHardLetters()).toBeLessThan(MAX_NUMBER_OF_HARD_LETTERS + 1))
  })
})
