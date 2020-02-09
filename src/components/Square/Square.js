import React from 'react'
import './Square.scss'

export const Square = ({ letter, status, gridType, backGroundStyle = {} }) => {
  return (
    <div
      className='square' id={`${status}${gridType ? `-${gridType}` : ''}`} data-testid={`square${status ? '-'.concat(status) : ''}`}
      style={backGroundStyle}
    >
      <div className='letter'>
        {letter}
      </div>
    </div>
  )
}
