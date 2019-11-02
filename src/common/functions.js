import { alphabetString, defaultLetterList, xDim, yDim, vowels } from './constants'

const generateRandomLetter = () => {
  return alphabetString[Math.floor(Math.random() * 26)]
}

export const generateRandomLetterList = () => {
  let valid = false
  let letterList
  while (!valid) {
    letterList = Array.from(Array(xDim * yDim), () => {
      return generateRandomLetter()
    })

    const vowelNumber = letterList.filter(letter => vowels.indexOf(letter) !== -1).length
    if (vowelNumber > 4) {
      valid = true
    }
  }

  return letterList
}

export const generateGrid = (letterList = defaultLetterList) => {
  let i = -1
  return Array.from(Array(xDim), () => {
    return Array.from(Array(yDim), () => {
      i++
      return {
        letter: letterList[i],
        status: null
      }
    })
  })
}
