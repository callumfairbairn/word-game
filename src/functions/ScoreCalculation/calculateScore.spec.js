import {calculateScore} from "./calculateScore";

describe('calculateScore', () => {
  it('returns the sum of the values of each letter', () => {
    const word = 'points'

    expect(calculateScore(word)).toEqual(8)
  })
})