import { areLettersAdjacent } from './areLettersAdjacent'

describe('areLettersAdjacent', () => {
  it('returns false if letters are not adjacent', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 2, y: 2 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(false)
  })

  it('returns true if letters are horizontally adjacent', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 0, y: 1 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(true)
  })

  it('returns false if letters are in the same row but not next to each other', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 0, y: 2 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(false)
  })

  it('returns true if letters are vertically adjacent', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 1, y: 0 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(true)
  })

  it('returns false if letters in the same column but not net to each other', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 2, y: 0 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(false)
  })

  it('returns false if letters have the same coordinates', () => {
    const letter1 = { x: 0, y: 0 }
    const letter2 = { x: 2, y: 0 }
    expect(areLettersAdjacent(letter1, letter2)).toEqual(false)
  })
})
