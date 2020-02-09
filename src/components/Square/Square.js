import React from 'react'
import './Square.scss'

export const Square = ({ letter, status, gridType }) => {
  return (
    <div className='square' id={`${status}${gridType ? `-${gridType}` : ''}`} data-testid={`square${status ? '-'.concat(status) : ''}`}>
      <div className='letter'>
        {letter}
      </div>
    </div>
  )
}
