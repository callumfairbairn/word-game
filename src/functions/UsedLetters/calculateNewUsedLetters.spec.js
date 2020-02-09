import { generateFreshUsedLettersArray } from './generateFreshUsedLettersArray'
import { X_DIM, Y_DIM } from '../../common/constants'
import { calculateNewUsedLetters } from './calculateNewUsedLetters'

describe('calculateNewUsedLetters', () => {
  it('returns a two dimensional array', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    expect(calculateNewUsedLetters(usedLetters, paths).length).toEqual(X_DIM)
    expect(calculateNewUsedLetters(usedLetters, paths)[0].length).toEqual(Y_DIM)
  })

  it('adds one to each element corresponding to a coordinate in paths, and doesnt change other coords', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    const newUsedLetters = calculateNewUsedLetters(usedLetters, paths)

    expect(newUsedLetters[0][0]).toEqual(1)
    expect(newUsedLetters[0][1]).toEqual(1)
    expect(newUsedLetters[0][2]).toEqual(1)
    expect(newUsedLetters[0][3]).toEqual(0)
    expect(newUsedLetters[1][0]).toEqual(0)
    expect(newUsedLetters[1][1]).toEqual(0)
    expect(newUsedLetters[1][2]).toEqual(0)
    expect(newUsedLetters[1][3]).toEqual(0)
    expect(newUsedLetters[2][0]).toEqual(0)
    expect(newUsedLetters[2][1]).toEqual(0)
    expect(newUsedLetters[2][2]).toEqual(0)
    expect(newUsedLetters[2][3]).toEqual(0)
    expect(newUsedLetters[3][0]).toEqual(0)
    expect(newUsedLetters[3][1]).toEqual(0)
    expect(newUsedLetters[3][2]).toEqual(0)
    expect(newUsedLetters[3][3]).toEqual(0)
  })

  it('works for multiple starting paths with all different letters', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [[{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }]]
    const newUsedLetters = calculateNewUsedLetters(usedLetters, paths)

    expect(newUsedLetters[0][0]).toEqual(1)
    expect(newUsedLetters[0][1]).toEqual(1)
    expect(newUsedLetters[0][2]).toEqual(1)
    expect(newUsedLetters[0][3]).toEqual(0)
    expect(newUsedLetters[1][0]).toEqual(0)
    expect(newUsedLetters[1][1]).toEqual(0)
    expect(newUsedLetters[1][2]).toEqual(0)
    expect(newUsedLetters[1][3]).toEqual(0)
    expect(newUsedLetters[2][0]).toEqual(0)
    expect(newUsedLetters[2][1]).toEqual(0)
    expect(newUsedLetters[2][2]).toEqual(0)
    expect(newUsedLetters[2][3]).toEqual(0)
    expect(newUsedLetters[3][0]).toEqual(0)
    expect(newUsedLetters[3][1]).toEqual(1)
    expect(newUsedLetters[3][2]).toEqual(1)
    expect(newUsedLetters[3][3]).toEqual(1)
  })

  it('works for multiple starting paths with similar letters', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [[{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]]
    const newUsedLetters = calculateNewUsedLetters(usedLetters, paths)

    expect(newUsedLetters[0][0]).toEqual(1)
    expect(newUsedLetters[0][1]).toEqual(1)
    expect(newUsedLetters[0][2]).toEqual(1)
    expect(newUsedLetters[0][3]).toEqual(0)
    expect(newUsedLetters[1][0]).toEqual(1)
    expect(newUsedLetters[1][1]).toEqual(0)
    expect(newUsedLetters[1][2]).toEqual(0)
    expect(newUsedLetters[1][3]).toEqual(0)
    expect(newUsedLetters[2][0]).toEqual(0)
    expect(newUsedLetters[2][1]).toEqual(0)
    expect(newUsedLetters[2][2]).toEqual(0)
    expect(newUsedLetters[2][3]).toEqual(0)
    expect(newUsedLetters[3][0]).toEqual(0)
    expect(newUsedLetters[3][1]).toEqual(0)
    expect(newUsedLetters[3][2]).toEqual(0)
    expect(newUsedLetters[3][3]).toEqual(0)
  })

  it('works for a fork in the middle of a single path', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [{ x: 0, y: 0 }, [{ x: 0, y: 1 }, { x: 1, y: 1 }], { x: 0, y: 2 }]
    const newUsedLetters = calculateNewUsedLetters(usedLetters, paths)

    expect(newUsedLetters[0][0]).toEqual(1)
    expect(newUsedLetters[0][1]).toEqual(1)
    expect(newUsedLetters[0][2]).toEqual(1)
    expect(newUsedLetters[0][3]).toEqual(0)
    expect(newUsedLetters[1][0]).toEqual(0)
    expect(newUsedLetters[1][1]).toEqual(1)
    expect(newUsedLetters[1][2]).toEqual(0)
    expect(newUsedLetters[1][3]).toEqual(0)
    expect(newUsedLetters[2][0]).toEqual(0)
    expect(newUsedLetters[2][1]).toEqual(0)
    expect(newUsedLetters[2][2]).toEqual(0)
    expect(newUsedLetters[2][3]).toEqual(0)
    expect(newUsedLetters[3][0]).toEqual(0)
    expect(newUsedLetters[3][1]).toEqual(0)
    expect(newUsedLetters[3][2]).toEqual(0)
    expect(newUsedLetters[3][3]).toEqual(0)
  })

  it('works for a fork in the middle of a double path', () => {
    const usedLetters = generateFreshUsedLettersArray()
    const paths = [[{ x: 0, y: 0 }, [{ x: 0, y: 1 }, { x: 1, y: 1 }], { x: 0, y: 2 }], [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }]]
    const newUsedLetters = calculateNewUsedLetters(usedLetters, paths)

    expect(newUsedLetters[0][0]).toEqual(1)
    expect(newUsedLetters[0][1]).toEqual(1)
    expect(newUsedLetters[0][2]).toEqual(1)
    expect(newUsedLetters[0][3]).toEqual(0)
    expect(newUsedLetters[1][0]).toEqual(0)
    expect(newUsedLetters[1][1]).toEqual(1)
    expect(newUsedLetters[1][2]).toEqual(0)
    expect(newUsedLetters[1][3]).toEqual(0)
    expect(newUsedLetters[2][0]).toEqual(0)
    expect(newUsedLetters[2][1]).toEqual(0)
    expect(newUsedLetters[2][2]).toEqual(0)
    expect(newUsedLetters[2][3]).toEqual(0)
    expect(newUsedLetters[3][0]).toEqual(0)
    expect(newUsedLetters[3][1]).toEqual(1)
    expect(newUsedLetters[3][2]).toEqual(1)
    expect(newUsedLetters[3][3]).toEqual(1)
  })
})
