import { render } from '@testing-library/react'
import App from './App'
import React from 'react'
import './reactTestSetup'

const mockData = {
  letter_list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
  found_words: ['one', 'two', 'three']
}

describe('App', () => {
  it('should render a normal grid and a mask grid grid', () => {
    const { getAllByTestId } = render(<App data={mockData} gameRunning setData={() => {}} setGameRunning={() => {}} />)
    expect(getAllByTestId('grid').length).toEqual(2)
  })

  it('should render an input field', () => {
    const { getByTestId } = render(<App data={mockData} gameRunning setData={() => {}} setGameRunning={() => {}} />)
    expect(getByTestId('input-field'))
  })

  it('should render the word display', () => {
    const { getByTestId } = render(<App data={mockData} gameRunning setData={() => {}} setGameRunning={() => {}} />)
    expect(getByTestId('word-display'))
  })

  it('should generate a random grid', () => {
    const { getAllByTestId } = render(<App data={mockData} gameRunning setData={() => {}} setGameRunning={() => {}} />)
    const expectedLetterList = ['A', 'E', 'I', 'M', 'B', 'F', 'J', 'N', 'C', 'G', 'K', 'O', 'D', 'H', 'L', 'P']
    const letters = getAllByTestId('square').map(square => {
      return square.textContent
    })

    expect(letters).not.toEqual(expectedLetterList)
  })
})
