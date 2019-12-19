import { assignLetterStatus } from './assignLetterStatus'
import { generateGrid } from '../GridGeneration/generateGrid'

describe('assignLetterStatus', () => {
  it('assigns no letters status if path is []', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = []
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    result.map(x => {
      x.map(y => {
        expect(y.status).toEqual(null)
      })
    })
  })

  it('assigns selected to one letter', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 0, y: 0 }]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[0][0].status).toEqual('selected')
  })

  it('assigns selected to a different letter', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[1][1].status).toEqual('selected')
  })

  it('assigns selected for two letters', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 2 }]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns selected for a branching path', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 2 }, [{ x: 3, y: 1 }, { x: 0, y: 2 }]]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[1][2].status).toEqual('selected')
    expect(result[3][1].status).toEqual('selected')
    expect(result[0][2].status).toEqual('selected')
  })

  it('assigns selected for multiple paths (1)', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 1 }], [{ x: 2, y: 2 }, { x: 2, y: 3 }]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns selected for multiple paths (2)', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 1 }], [{ x: 2, y: 2 }, { x: 2, y: 3 }]]
    const wordStatus = 'selected'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns correct for a correct word', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]]
    const wordStatus = 'correct'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[2][2].status).toEqual('correct')
    expect(result[3][1].status).toEqual('correct')
    expect(result[2][0].status).toEqual('correct')
    expect(result[1][1].status).toEqual('correct')
    expect(result[1][0].status).toEqual('correct')
  })

  it('assigns found for found words', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]]
    const wordStatus = 'found'
    const result = assignLetterStatus(grid, paths, wordStatus)
    expect(result[2][2].status).toEqual('found')
    expect(result[3][1].status).toEqual('found')
    expect(result[2][0].status).toEqual('found')
    expect(result[1][1].status).toEqual('found')
    expect(result[1][0].status).toEqual('found')
  })
})
