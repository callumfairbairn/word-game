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
})
