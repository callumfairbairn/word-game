import { Grid } from './Grid'
import { InputField } from '../InputField/InputField'
import React, { useEffect, useState } from 'react'

const GridWrapper = ({ setInput, blankGrid, handleSubmittedInput, handleAnyInput }) => {
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
      <InputField setInput={setInput} onFormSubmit={handleSubmittedInput(setGridMask)} />
    </div>
  )
}

export default GridWrapper
