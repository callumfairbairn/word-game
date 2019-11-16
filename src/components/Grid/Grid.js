import React from 'react'
import './Grid.scss'
import { Square } from '../Square/Square'
import { xDim, yDim } from '../../common/constants'

export const Grid = ({ grid }) => {
  return (
    <div className='grid' data-testid='grid'>
      {Array.from(Array(yDim), (_, y) =>
        <div className='row' key={y}>
          {Array.from(Array(xDim), (_, x) =>
            <div className='column' key={x}>
              <Square key={[x, y]} status={grid[x][y].status} letter={grid[x][y].letter} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
