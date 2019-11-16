import React from 'react'
import './Square.scss'

export const Square = ({ letter, status }) => {
  return (
    <div className='square' id={status} data-testid={`square${status ? '-'.concat(status) : ''}`}>
      <div className='letter'>
        {letter}
      </div>
    </div>
  )
}
