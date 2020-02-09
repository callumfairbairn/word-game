import React from 'react'
import { Square } from '../Square/Square'
import { X_DIM, Y_DIM } from '../../common/constants'

export const HeatMapGrid = ({ grid, gridType }) => {
  return (
    <div className='grid' data-testid='grid'>
      {Array.from(Array(Y_DIM), (_, y) =>
        <div className='row' key={y}>
          {Array.from(Array(X_DIM), (_, x) =>
            <div className='column' key={x}>
              <Square
                key={[x, y]}
                letter={grid[x][y].letter}
                gridType={gridType}
                status='a'
                backGroundStyle={{
                  backgroundColor: `rgba(0, 0, 255, ${grid[x][y].status})`
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
