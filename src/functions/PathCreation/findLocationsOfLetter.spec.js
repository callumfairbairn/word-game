import { generateGrid } from '../GridGeneration/generateGrid'
import { DEFAULT_LETTER_LIST } from '../../common/constants'
import findLocationsOfLetter from './findLocationsOfLetter'

describe('findLocationsOfLetter', () => {
  it('should return a position for a letter occurring only once', () => {
    const grid = generateGrid(DEFAULT_LETTER_LIST)
    const letter = 'E'
    expect(findLocationsOfLetter(grid, letter)).toEqual([{ x: 1, y: 0 }])
  })

  it('should return a list of positions for letters occuring more than once', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const letter = 'G'
    expect(findLocationsOfLetter(grid, letter)).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }])
  })
})
