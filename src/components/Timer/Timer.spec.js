import Timer from './Timer'
import React from 'react'
import { render } from '@testing-library/react'
import { STARTING_TIME } from '../../common/constants'

describe('Timer', () => {
  it('displays 2:00 by default', () => {
    const { getByTestId } = render(<Timer time={STARTING_TIME} setTime={() => {}} />)

    const timer = getByTestId('timer')
    expect(timer.textContent).toEqual('02:00')
  })
})
