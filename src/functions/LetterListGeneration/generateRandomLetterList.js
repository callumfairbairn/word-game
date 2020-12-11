import { ALPHABET_STRING, X_DIM, Y_DIM } from '../../common/constants'

const generateRandomLetter = () => {
  return ALPHABET_STRING[Math.floor(Math.random() * 26)]
}

export const generateRandomLetterList = () => {
  const list = []
  for (let x = 0; x < X_DIM * Y_DIM; x++) {
    list.push(generateRandomLetter())
  }

  return list
}
