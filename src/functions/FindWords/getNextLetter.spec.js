import { generateGrid } from "../GridGeneration/generateGrid";
import { generateRandomLetterList } from "../LetterListGeneration/generateRandomLetterList";
import { getNextLetter } from "./getNextLetter";

describe('getNextLetter', () => {
  it('returns the letter to the right of the input letter if possible', () => {
    const location = { x: 1 , y: 1 }
    const direction = 'right'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid).location).toEqual({ x: 1 , y: 2 })
  })

  it('returns undefined if right is impossible', () => {
    const location = { x: 3 , y: 3 }
    const direction = 'right'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid)).toEqual(undefined)
  })

  it('returns the letter below the input letter if possible', () => {
    const location = { x: 1 , y: 1 }
    const direction = 'down'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid).location).toEqual({ x: 2 , y: 1})
  })

  it('returns undefined if down is impossible', () => {
    const location = { x: 3 , y: 3 }
    const direction = 'down'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid)).toEqual(undefined)
  })

  it('returns the letter to the left of the input letter if possible', () => {
    const location = { x: 1 , y: 1 }
    const direction = 'left'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid).location).toEqual({ x: 1 , y: 0 })
  })

  it('returns undefined if left is impossible', () => {
    const location = { x: 0 , y: 0 }
    const direction = 'left'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid)).toEqual(undefined)
  })

  it('returns the letter above the input letter if possible', () => {
    const location = { x: 1 , y: 1 }
    const direction = 'up'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid).location).toEqual({ x: 0 , y: 1 })
  })

  it('returns undefined if up is impossible', () => {
    const location = { x: 0 , y: 0 }
    const direction = 'up'
    const grid = generateGrid(generateRandomLetterList())

    expect(getNextLetter(location, direction, grid)).toEqual(undefined)
  })

})