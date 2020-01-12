import { DEFAULT_LETTER_LIST } from '../../../common/constants'
import { returnAdjacentLetters } from './returnAdjacentLetters'

describe('returnAdjacentLetters', () => {
  it('returns all adjacent positions of given letter', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 5
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'A', direction: 'up-left' },
      { letter: 'B', direction: 'up' },
      { letter: 'C', direction: 'up-right' },
      { letter: 'G', direction: 'right' },
      { letter: 'K', direction: 'down-right' },
      { letter: 'J', direction: 'down' },
      { letter: 'I', direction: 'down-left' },
      { letter: 'E', direction: 'left' }
    ])
  })

  it('returns right, down-right and below if given top left corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 0
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'B', direction: 'right' },
      { letter: 'F', direction: 'down-right' },
      { letter: 'E', direction: 'down' }
    ])
  })

  it('returns up-left, up and left if given bottom right corner of grid', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 15
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'K', direction: 'up-left' },
      { letter: 'L', direction: 'up' },
      { letter: 'O', direction: 'left' }
    ])
  })

  it('returns up-left, up, down, down-left and left if letter is on right edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 7
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'C', direction: 'up-left' },
      { letter: 'D', direction: 'up' },
      { letter: 'L', direction: 'down' },
      { letter: 'K', direction: 'down-left' },
      { letter: 'G', direction: 'left' }
    ])
  })

  it('returns up, up-right, right, down-right and down if letter is on left edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 4
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'A', direction: 'up' },
      { letter: 'B', direction: 'up-right' },
      { letter: 'F', direction: 'right' },
      { letter: 'J', direction: 'down-right' },
      { letter: 'I', direction: 'down' }
    ])
  })

  it('returns right, down-right, down, down-left, left if letter is on top edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 1
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'C', direction: 'right' },
      { letter: 'G', direction: 'down-right' },
      { letter: 'F', direction: 'down' },
      { letter: 'E', direction: 'down-left' },
      { letter: 'A', direction: 'left' }
    ])
  })

  it('returns up-left, up, up-right, right and left if letter is on bottom edge', () => {
    const letterList = DEFAULT_LETTER_LIST
    const position = 13
    expect(returnAdjacentLetters(letterList, position)).toEqual([
      { letter: 'I', direction: 'up-left' },
      { letter: 'J', direction: 'up' },
      { letter: 'K', direction: 'up-right' },
      { letter: 'O', direction: 'right' },
      { letter: 'M', direction: 'left' }
    ])
  })
})
