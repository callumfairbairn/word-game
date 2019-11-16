import { generateGrid } from '../Generation/generation'
import createPaths from './createPaths'

const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])

describe('pathFindingAlgorithm', () => {
  it('should return [] when input is empty', () => {
    const input = ''
    expect(createPaths(grid, input)).toEqual([])
  })

  it('should find initial locations', () => {
    const input = 'g'
    expect(createPaths(grid, input)).toEqual([[{ x: 1, y: 2 }], [{ x: 2, y: 1 }]])
  })

  it('should return a path of two letters long', () => {
    const input = 'gf'
    expect(createPaths(grid, input)).toEqual([[{ x: 1, y: 2 }, { x: 1, y: 1 }], [{ x: 2, y: 1 }, { x: 1, y: 1 }]])
  })

  it('should return a path of three letters long', () => {
    const input = 'gfb'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 1 }
      ],
      [
        { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }
      ]
    ])
  })

  it('should return a path of four letters long', () => {
    const input = 'gfba'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 0 }
      ],
      [
        { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 0 }
      ]
    ])
  })

  it('should account for multiple paths', () => {
    const input = 'okg'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 3, y: 2 }, { x: 2, y: 2 }, [{ x: 1, y: 2 }, { x: 2, y: 1 }]
      ]
    ])
  })

  it('should handle multiple paths with extra letter after', () => {
    const input = 'okgf'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 3, y: 2 }, { x: 2, y: 2 }, [{ x: 1, y: 2 }, { x: 2, y: 1 }], { x: 1, y: 1 }
      ]
    ])
  })

  it('should not backtrack', () => {
    const input = 'gfg'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }
      ],
      [
        { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }
      ]
    ])
  })

  it('should remove invalid paths', () => {
    const input = 'okgh'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }
      ]
    ])
  })

  it('should return empty array string is not valid', () => {
    const input = 'oka'
    expect(createPaths(grid, input)).toEqual([])
  })

  it('should not get rid of correct starting letters', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'G', 'O', 'P'])
    const input = 'gf'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 1, y: 2 }, { x: 1, y: 1 }
      ],
      [
        { x: 2, y: 1 }, { x: 1, y: 1 }
      ]
    ])
  })

  it('should not break when the initial letter has two options', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'X', 'C', 'C', 'P'])
    const input = 'gic'
    expect(createPaths(grid, input)).toEqual([
      [
        { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 1 }
      ]
    ])
  })

  it('should not highlight is this specific situation', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'J', 'A', 'N', 'O', 'P'])
    const input = 'gkjj'
    expect(createPaths(grid, input)).toEqual([])
  })

  it('should remove invalid paths back to source', () => {
    const grid = generateGrid(['A', 'U', 'N', 'E', 'R', 'N', 'G', 'H', 'I', 'U', 'K', 'L', 'M', 'A', 'O', 'P'])
    const input = 'rune'
    expect(createPaths(grid, input)).toEqual([
      [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }]
    ])
  })
})
