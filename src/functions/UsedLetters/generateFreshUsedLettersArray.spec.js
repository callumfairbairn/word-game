import { generateFreshUsedLettersArray } from './generateFreshUsedLettersArray'
import { X_DIM, Y_DIM } from '../../common/constants'

describe('generateFreshUsedLettersArray', () => {
  it('first dimension of array has length x_DIM', () => {
    expect(generateFreshUsedLettersArray().length).toEqual(X_DIM)
  })

  it('second dimension of array has length Y_DIM', () => {
    expect(generateFreshUsedLettersArray()[0].length).toEqual(Y_DIM)
  })

  it('contains all zeroes', () => {
    const usedLetters = generateFreshUsedLettersArray()

    for (let x = 0; x < usedLetters.length; x++) {
      for (let y = 0; y < usedLetters[0].length; y++) {
        expect(usedLetters[x][y]).toEqual(0)
      }
    }
  })
})
