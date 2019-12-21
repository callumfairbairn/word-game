import { ALPHABET_STRING, MIN_NUMBER_OF_VOWELS, VOWELS, X_DIM, Y_DIM } from '../../common/constants'
import { fixLetters } from './fixLetters'
import { ensureConsonantsTouchAtLeastOneVowel } from './ensureConsonantsTouchAtLeastOneVowel/ensureConsonantsTouchAtLeastOneVowel'
import { reduceNumberOfHardLetters } from './reduceNumberOfHardLetters/reduceNumberOfHardLetters'

export const generateRandomLetterList = () => {
  const letterList = Array.from(Array(X_DIM * Y_DIM), () => {
    return generateRandomLetter()
  })

  fixLetters(letterList, MIN_NUMBER_OF_VOWELS, VOWELS)
  reduceNumberOfHardLetters(letterList)
  ensureConsonantsTouchAtLeastOneVowel(letterList)
  return letterList
}

const generateRandomLetter = () => {
  return ALPHABET_STRING[Math.floor(Math.random() * 26)]
}
