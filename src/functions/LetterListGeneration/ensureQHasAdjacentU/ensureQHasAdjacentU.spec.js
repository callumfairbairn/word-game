import { ensureQHasAdjacentU } from './ensureQHasAdjacentU'
import { returnAdjacentLetters } from '../common/returnAdjacentLetters'
import { DEFAULT_LETTER_LIST } from '../../../common/constants'

describe('ensureQHasAdjacentU', () => {
  it('does not change the board if q is not present', () => {
    const letterList = DEFAULT_LETTER_LIST
    const oldLetterList = [...letterList]

    ensureQHasAdjacentU(letterList)

    expect(oldLetterList).toEqual(letterList)
  })

  it('adds a U if there is a Q', () => {
    const letterList = ['Q', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']

    ensureQHasAdjacentU(letterList)

    expect(letterList).toContain('U')
  })

  it('adds a U adjacent to the Q', () => {
    const letterList = ['Q', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']

    ensureQHasAdjacentU(letterList)
    const adjacentLettersToQ = returnAdjacentLetters(letterList, 0).map(object => object.letter)

    expect(adjacentLettersToQ).toContain('U')
  })
})
