import { Grid } from './Grid'
import React, { useEffect, useState } from 'react'

const GridWrapper = ({ blankGrid, handleSubmittedInput, handleAnyInput, children }) => {
  const [grid, setGrid] = useState(blankGrid)
  const [gridMask, setGridMask] = useState(blankGrid)

  useEffect(() => {
    handleAnyInput(setGrid, setGridMask)
  }, [handleAnyInput])

  return (
    <div className='grid-wrapper'>
      <div className='grid-container'>
        <Grid grid={grid} gridType='default' />
        <Grid grid={gridMask} gridType='mask' />
      </div>
      {children(handleSubmittedInput(setGridMask))}
    </div>
  )
}

export default GridWrapper
