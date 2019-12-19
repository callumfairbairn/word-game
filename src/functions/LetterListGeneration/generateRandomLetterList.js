import {
  ALPHABET_STRING,
  HARD_LETTERS,
  MAX_NUMBER_OF_HARD_LETTERS,
  MIN_NUMBER_OF_VOWELS,
  VOWELS,
  X_DIM,
  Y_DIM
} from '../../common/constants'
import { fixLetters } from './fixLetters'
import { ensureConsonantsTouchAtLeastOneVowel } from './EnsureConsonantsTouchAtLeastOneVowel/ensureConsonantsTouchAtLeastOneVowel'

export const generateRandomLetterList = () => {
  const letterList = Array.from(Array(X_DIM * Y_DIM), () => {
    return generateRandomLetter()
  })

  fixLetters(letterList, MIN_NUMBER_OF_VOWELS, VOWELS)
  fixLetters(letterList, MAX_NUMBER_OF_HARD_LETTERS, HARD_LETTERS)
  ensureConsonantsTouchAtLeastOneVowel(letterList)
  return letterList
}

const generateRandomLetter = () => {
  return ALPHABET_STRING[Math.floor(Math.random() * 26)]
}
