import React from 'react'
import WordDisplay from './WordDisplay'
import { render } from '@testing-library/react'
import { within } from '@testing-library/dom'
import '../../reactTestSetup'

describe('WordDisplay', () => {
  it('renders an empty display when foundWords is empty', () => {
    const { queryByTestId } = render(<WordDisplay foundWords={[]} possibleWords={[]} />)
    const wordDisplay = queryByTestId('word-display')
    expect(wordDisplay).toBeTruthy()
  })

  it('renders the contents of foundWords', () => {
    const foundWords = ['one', 'two', 'three', 'four']
    const { queryByTestId } = render(<WordDisplay foundWords={foundWords} possibleWords={[]} />)
    const wordDisplay = queryByTestId('word-display')
    expect(within(wordDisplay).queryByText('one')).toBeTruthy()
    expect(within(wordDisplay).queryByText('two')).toBeTruthy()
    expect(within(wordDisplay).queryByText('three')).toBeTruthy()
    expect(within(wordDisplay).queryByText('four')).toBeTruthy()
  })

  it('displays the number of found words and the number of possible found words', () => {
    const foundWords = ['one', 'two']
    const possibleWords = ['one', 'two', 'three']
    const { getByText } = render(<WordDisplay foundWords={foundWords} possibleWords={possibleWords} />)
    expect(getByText('2/3'))
  })
})
