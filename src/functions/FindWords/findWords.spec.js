import { generateGrid } from '../GridGeneration/generateGrid'
import { findWords } from './findWords'
import { expectArrayToContainInAnyOrder } from '../../testHelpers/ExpectArrayToContainInAnyOrder/expectArrayToContainInAnyOrder'

const dict = require('../../words')

describe('findWords', () => {
  it('finds no words in a grid which contains no words', () => {
    const grid = generateGrid(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expectArrayToContainInAnyOrder(findWords(grid, dict), [])
  })

  it('finds a horizontal word', () => {
    const grid = generateGrid(['J', 'A', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expectArrayToContainInAnyOrder(findWords(grid, dict), ['jazz', 'zax'])
  })

  it('finds multiple horizontal words', () => {
    const grid = generateGrid(['B', 'O', 'T', 'S', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expectArrayToContainInAnyOrder(findWords(grid, dict), ['bot', 'bots', 'box', 'stob'])
  })

  it('does not care about order', () => {
    const grid = generateGrid(['B', 'O', 'T', 'S', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expectArrayToContainInAnyOrder(findWords(grid, dict), ['bots', 'bot', 'box', 'stob'])
  })

  it('finds multiple horizontal words with one word starting from the second position', () => {
    const grid = generateGrid(['S', 'C', 'R', 'Y', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expectArrayToContainInAnyOrder(findWords(grid, dict), ['scry', 'cry'])
  })

  it('finds words on multiple rows', () => {
    const grid = generateGrid(['S', 'C', 'R', 'Y', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'J', 'A', 'Z', 'Z'])
    expect(findWords(grid, dict)).toEqual(expect.arrayContaining(['scry', 'cry', 'jazz']))
  })

  it('finds words in one row backwards', () => {
    const grid = generateGrid(['Y', 'R', 'C', 'S', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
    expect(findWords(grid, dict)).toEqual(expect.arrayContaining(['scry', 'cry']))
  })

  it('finds words in a column', () => {
    const grid = generateGrid(['S', 'X', 'X', 'X', 'C', 'X', 'X', 'X', 'R', 'X', 'X', 'X', 'Y', 'X', 'X', 'X'])
    expect(findWords(grid, dict)).toEqual(expect.arrayContaining(['scry', 'cry']))
  })
})
