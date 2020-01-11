import { ALPHABET_STRING, X_DIM, Y_DIM } from '../../common/constants'
import { ensureConsonantsTouchAtLeastOneVowel } from './ensureConsonantsTouchAtLeastOneVowel/ensureConsonantsTouchAtLeastOneVowel'
import { reduceNumberOfHardLetters } from './reduceNumberOfHardLetters/reduceNumberOfHardLetters'
import { increaseNumberOfVowels } from './increaseNumberOfVowels/increaseNumberOfVowels'
import { increaseOccurrencesOfS } from './increaseOccurancesOfS/increaseOccurrencesOfS'
import { ensureQHasAdjacentU } from './ensureQHasAdjacentU/ensureQHasAdjacentU'

export const generateRandomLetterList = () => {
  const letterList = Array.from(Array(X_DIM * Y_DIM), () => {
    return generateRandomLetter()
  })

  reduceNumberOfHardLetters(letterList)
  ensureConsonantsTouchAtLeastOneVowel(letterList)
  increaseOccurrencesOfS(letterList)
  ensureQHasAdjacentU(letterList)
  increaseNumberOfVowels(letterList)
  return letterList
}

const generateRandomLetter = () => {
  return ALPHABET_STRING[Math.floor(Math.random() * 26)]
}
