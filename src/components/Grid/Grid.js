import React from 'react'
import './Grid.scss'
import { Square } from '../Square/Square'
import { X_DIM, Y_DIM } from '../../common/constants'

export const Grid = ({ grid, gridType }) => {
  return (
    <div className='grid' data-testid='grid'>
      {Array.from(Array(Y_DIM), (_, y) =>
        <div className='row' key={y}>
          {Array.from(Array(X_DIM), (_, x) =>
            <div className='column' key={x}>
              <Square key={[x, y]} status={grid[x][y].status} letter={grid[x][y].letter} gridType={gridType} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
