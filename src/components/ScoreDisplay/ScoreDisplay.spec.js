import React from 'react'
import { render } from '@testing-library/react'
import { ScoreDisplay } from './ScoreDisplay'

describe('ScoreDisplay', () => {
  it('renders 0 by default', () => {
    const { getByText } = render(<ScoreDisplay />)

    expect(getByText('0'))
  })

  it('renders the score when given a score', () => {
    const { getByText } = render(<ScoreDisplay score={12} />)

    expect(getByText('12'))
  })
})
