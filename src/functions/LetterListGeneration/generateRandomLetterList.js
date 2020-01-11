import { ALPHABET_STRING, X_DIM, Y_DIM } from '../../common/constants'
import { ensureConsonantsTouchAtLeastOneVowel } from './ensureConsonantsTouchAtLeastOneVowel/ensureConsonantsTouchAtLeastOneVowel'
import { reduceNumberOfHardLetters } from './reduceNumberOfHardLetters/reduceNumberOfHardLetters'
import { increaseNumberOfVowels } from './increaseNumberOfVowels/increaseNumberOfVowels'
import { increaseOccurrencesOfS } from './increaseOccurancesOfS/increaseOccurrencesOfS'
import { ensureQHasAdjacentU } from './ensureQHasAdjacentU/ensureQHasAdjacentU'
import { returnNumberOfTimesSetAppearsInList } from './common/returnNumberOfTimesSetAppearsInList'
import { letterOccurrenceFrequencies } from '../../common/letterOccurranceFrequencies'

export const generateRandomLetterList = () => {
  const letterList = generateBaseList()

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

const generateBaseList = () => {
  const list = []
  for (let x = 0; x < X_DIM * Y_DIM; x++) {
    let foundValidLetter = false

    while (!foundValidLetter) {
      const letter = generateRandomLetter()
      if (returnNumberOfTimesSetAppearsInList(list, [letter]) < letterOccurrenceFrequencies[letter]) {
        list.push(letter)
        foundValidLetter = true
      }
    }
  }

  return list
}
