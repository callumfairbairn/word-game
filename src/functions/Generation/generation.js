import { ALPHABET_STRING, DEFAULT_LETTER_LIST, X_DIM, Y_DIM, VOWELS } from '../../common/constants'

const generateRandomLetter = () => {
  return ALPHABET_STRING[Math.floor(Math.random() * 26)]
}

export const generateRandomLetterList = () => {
  let valid = false
  let letterList
  while (!valid) {
    letterList = Array.from(Array(X_DIM * Y_DIM), () => {
      return generateRandomLetter()
    })

    const vowelNumber = letterList.filter(letter => VOWELS.indexOf(letter) !== -1).length
    if (vowelNumber > 4) {
      valid = true
    }
  }

  return letterList
}

export const generateGrid = (letterList = DEFAULT_LETTER_LIST) => {
  let i = -1
  return Array.from(Array(X_DIM), () => {
    return Array.from(Array(Y_DIM), () => {
      i++
      return {
        letter: letterList[i],
        status: null
      }
    })
  })
}
