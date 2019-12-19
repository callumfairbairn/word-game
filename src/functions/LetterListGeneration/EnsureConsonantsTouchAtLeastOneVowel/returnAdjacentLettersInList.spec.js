import { DEFAULT_LETTER_LIST } from '../../../common/constants'
import { returnAdjacentLettersInList } from './returnAdjacentLettersInList'

describe('returnAdjacentLettersInList', () => {
  it('returns above, below, left and right of given letter', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 5
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'B', direction: 'up' },
      { letter: 'G', direction: 'right' },
      { letter: 'J', direction: 'down' },
      { letter: 'E', direction: 'left' }
    ])
  })

  it('returns right and below if given top left corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 0
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'B', direction: 'right' },
      { letter: 'E', direction: 'down' }
    ])
  })

  it('returns above and left if given bottom right corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 15
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'L', direction: 'up' },
      { letter: 'O', direction: 'left' }
    ])
  })

  it('returns above, below and left if letter is on right edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 7
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'D', direction: 'up' },
      { letter: 'L', direction: 'down' },
      { letter: 'G', direction: 'left' }
    ])
  })

  it('returns above, below and right if letter is on left edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 4
    expect(returnAdjacentLettersInList(letterList, position)).toEqual([
      { letter: 'A', direction: 'up' },
      { letter: 'F', direction: 'right' },
      { letter: 'I', direction: 'down' }
    ])
  })
})
