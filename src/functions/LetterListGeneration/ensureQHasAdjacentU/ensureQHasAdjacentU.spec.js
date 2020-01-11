import { ensureQHasAdjacentU } from './ensureQHasAdjacentU'
import { returnAdjacentLetters } from '../common/returnAdjacentLetters'

describe('ensureQHasAdjacentU', () => {
  it('does not change the board if q is not present', () => {
    const letterList = ['A', 'C', 'B', 'E', 'A', 'I', 'O', 'U']
    const oldLetterList = [...letterList]

    ensureQHasAdjacentU(letterList)

    expect(oldLetterList).toEqual(letterList)
  })

  it('adds a U if there is a Q', () => {
    const letterList = ['Q', 'B', 'C', 'E', 'A', 'I', 'O', 'L']

    ensureQHasAdjacentU(letterList)

    expect(letterList).toContain('U')
  })

  it('adds a U adjacent to the Q', () => {
    const letterList = ['Q', 'B', 'C', 'E', 'A', 'I', 'O', 'L']

    ensureQHasAdjacentU(letterList)
    const adjacentLettersToQ = returnAdjacentLetters(letterList, 0).map(object => object.letter)

    expect(adjacentLettersToQ).toContain('U')
  })
})
