import { DEFAULT_LETTER_LIST } from '../../../common/constants'
import { putSetOfAdjacentLettersBackIn } from './putSetOfAdjacentLettersBackIn'

describe('putSetOfAdjacentLettersBackIn', () => {
  it('changes the original letterList', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 0
    const adjacentLetters = [{ letter: 'X', direction: 'right' }, { letter: 'Y', direction: 'down' }]

    putSetOfAdjacentLettersBackIn(adjacentLetters, position, letterList)

    expect(letterList).toEqual(['A', 'X', 'C', 'D', 'Y', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'])
  })

  it('works with diagonal letters', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 5
    const adjacentLetters = [
      { letter: 'S', direction: 'up-left' },
      { letter: 'T', direction: 'up' },
      { letter: 'U', direction: 'up-right' },
      { letter: 'V', direction: 'right' },
      { letter: 'W', direction: 'down-right' },
      { letter: 'X', direction: 'down' },
      { letter: 'Y', direction: 'down-left' },
      { letter: 'Z', direction: 'left' }
    ]

    putSetOfAdjacentLettersBackIn(adjacentLetters, position, letterList)

    expect(letterList).toEqual(['S', 'T', 'U', 'D', 'Z', 'F', 'V', 'H', 'Y', 'X', 'W', 'L', 'M', 'N', 'O', 'P'])
  })

  it('throws error if letterList is not 16 letters long', () => {
    const letterList = ['A', 'B', 'C']

    expect(() => putSetOfAdjacentLettersBackIn([], 0, letterList)).toThrow(Error)
  })
})
