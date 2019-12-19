import { DEFAULT_LETTER_LIST, X_DIM, Y_DIM } from '../../common/constants'

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
