import { render } from '@testing-library/react'
import { assignLetterStatus, Grid } from './Grid'
import React from 'react'
import '../reactTestSetup'
import { defaultLetterList } from '../common/constants'
import { generateGrid } from '../common/functions'

const dict = require('../words')

describe('Grid', () => {
  it('should render a grid of letters', () => {
    const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input='' dict={dict} foundWords={[]} />)
    expect(queryAllByTestId('square').length).toEqual(16)
  })

  it('should render five selected letters given an input of length 5', () => {
    const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input='knifc' dict={dict} foundWords={[]} />)
    expect(queryAllByTestId('square-selected').length).toEqual(5)
  })

  it('should should not select a letter if that letter is not next to the previous letter', () => {
    const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input='abcde' dict={dict} foundWords={[]} />)
    expect(queryAllByTestId('square-selected').length).toEqual(0)
  })

  it('should not keep a letter selected if the next letter is not adjacent to it', () => {
    const customLetterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'N', 'O', 'P']
    const { queryAllByTestId } = render(<Grid letterList={customLetterList} input='ab' dict={dict} foundWords={[]} />)
    expect(queryAllByTestId('square-selected').length).toEqual(2)
  })

  it('set status as correct if word is valid', () => {
    const customLetterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'N', 'O', 'P']
    const { queryAllByTestId } = render(<Grid letterList={customLetterList} input='knife' dict={dict} foundWords={[]} setFoundWords={() => {}} />)
    expect(queryAllByTestId('square-correct').length).toEqual(5)
  })
})

describe('assignLetterStatus', () => {
  it('assigns no letters status if path is []', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = []
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    result.map(x => {
      x.map(y => {
        expect(y.status).toEqual(null)
      })
    })
  })

  it('assigns selected to one letter', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 0, y: 0 }]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[0][0].status).toEqual('selected')
  })

  it('assigns selected to a different letter', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[1][1].status).toEqual('selected')
  })

  it('assigns selected for two letters', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 2 }]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns selected for a branching path', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 2 }, [{ x: 3, y: 1 }, { x: 0, y: 2 }]]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[1][2].status).toEqual('selected')
    expect(result[3][1].status).toEqual('selected')
    expect(result[0][2].status).toEqual('selected')
  })

  it('assigns selected for multiple paths', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 1 }], [{ x: 2, y: 2 }, { x: 2, y: 3 }]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns selected for multiple paths', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 1, y: 1 }, { x: 2, y: 1 }], [{ x: 2, y: 2 }, { x: 2, y: 3 }]]
    const inputValid = false
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[1][1].status).toEqual('selected')
    expect(result[2][1].status).toEqual('selected')
    expect(result[2][2].status).toEqual('selected')
  })

  it('assigns correct for a correct word', () => {
    const grid = generateGrid(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P'])
    const paths = [[{ x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]]
    const inputValid = true
    const result = assignLetterStatus(grid, paths, inputValid)
    expect(result[2][2].status).toEqual('correct')
    expect(result[3][1].status).toEqual('correct')
    expect(result[2][0].status).toEqual('correct')
    expect(result[1][1].status).toEqual('correct')
    expect(result[1][0].status).toEqual('correct')
  })
})
