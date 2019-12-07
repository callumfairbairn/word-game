import { generateGrid } from '../Generation/generation'
import { DEFAULT_LETTER_LIST } from '../../common/constants'
import returnPositionsOfAdjacentCharacters from './returnPositionsOfAdjacentCharacters'

describe('returnPositionsOfAdjacentChracters', () => {
  it('should return a location of a given character surrounding a given location', () => {
    const grid = generateGrid(DEFAULT_LETTER_LIST)
    const input = [{ x: 1, y: 1 }]
    expect(returnPositionsOfAdjacentCharacters(grid, input, 'g')).toEqual([{ x: 1, y: 2 }])
  })

  it('should return a list of the locations of a given character surrounding a given location', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const input = [{ x: 1, y: 1 }]
    expect(returnPositionsOfAdjacentCharacters(grid, input, 'g')).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }])
  })
})
