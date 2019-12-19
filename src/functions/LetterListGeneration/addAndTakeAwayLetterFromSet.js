import { ALPHABET_SET, HARD_LETTERS } from '../../common/constants'

export const addLetterFromSet = (letterList, set) => {
  let successfullyAddedLetter = false

  while (!successfullyAddedLetter) {
    const randomPosition = Math.floor(Math.random() * letterList.length)

    if (!set.includes(letterList[randomPosition])) {
      letterList[randomPosition] = randomLetterFromSet(set)
      successfullyAddedLetter = true
    }
  }
}

export const takeAwayLetterFromSet = (letterList, set) => {
  let successfullyTakenAwayLetter = false

  while (!successfullyTakenAwayLetter) {
    const randomPosition = Math.floor(Math.random() * letterList.length)

    if (set.includes(letterList[randomPosition])) {
      letterList[randomPosition] = randomLetterFromSet(ALPHABET_SET.filter(letter => !HARD_LETTERS.includes(letter)))
      successfullyTakenAwayLetter = true
    }
  }
}

const randomLetterFromSet = (set) => {
  return set[Math.floor(Math.random() * set.length)]
}
