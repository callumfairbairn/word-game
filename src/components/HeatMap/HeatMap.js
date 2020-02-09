import React from 'react'
import { Grid } from '../Grid/Grid'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import { assignHeatMapStatus } from '../../functions/AssignLetterStatus/assignHeatMapStatus'

export const HeatMap = ({ letterList, usedLetters }) => {
  const grid = generateGrid(letterList)
  const styledGrid = assignHeatMapStatus(grid, usedLetters)

  return (
    <Grid grid={styledGrid} gridType='heatmap' />
  )
}
