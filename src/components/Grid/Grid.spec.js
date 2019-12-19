import { render } from '@testing-library/react'
import { Grid } from './Grid'
import React from 'react'
import '../../reactTestSetup'
import { DEFAULT_LETTER_LIST } from '../../common/constants'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import createPaths from '../../functions/PathCreation/createPaths'
import calculateWordStatus from '../../functions/WordValidation/calculateWordStatus'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'

const dict = require('../../words')

describe('Grid', () => {
  it('should render a grid of letters', () => {
    const defaultGrid = generateGrid(DEFAULT_LETTER_LIST)

    const { queryAllByTestId } = render(<Grid grid={defaultGrid} />)

    expect(queryAllByTestId('square').length).toEqual(16)
  })

  it('should render five selected letters given an input of length 5', () => {
    const input = 'knifc'; const foundWords = []; const defaultGrid = generateGrid(DEFAULT_LETTER_LIST)
    const paths = createPaths(defaultGrid, input)
    const wordStatus = calculateWordStatus(input, dict, foundWords)
    const assignedGrid = assignLetterStatus(defaultGrid, paths, wordStatus)

    const { queryAllByTestId } = render(<Grid grid={assignedGrid} />)

    expect(queryAllByTestId('square-selected').length).toEqual(5)
  })

  it('set status as correct if word is valid', () => {
    const customLetterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'N', 'O', 'P']
    const customGrid = generateGrid(customLetterList); const input = 'knife'; const foundWords = []
    const paths = createPaths(customGrid, input)
    const wordStatus = calculateWordStatus(input, dict, foundWords, true)
    const assignedGrid = assignLetterStatus(customGrid, paths, wordStatus)

    const { queryAllByTestId } = render(<Grid grid={assignedGrid} />)
    expect(queryAllByTestId('square-correct').length).toEqual(5)
  })
})
