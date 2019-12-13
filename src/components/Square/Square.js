import React from 'react'
import './Square.scss'

export const Square = ({ letter, status, mask }) => {
  return (
    <div className='square' id={`${status}${mask ? '-mask' : ''}`} data-testid={`square${status ? '-'.concat(status) : ''}`}>
      <div className='letter'>
        {letter}
      </div>
    </div>
  )
}
