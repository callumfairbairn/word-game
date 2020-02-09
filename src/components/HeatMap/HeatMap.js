import React from 'react'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import { assignHeatMapStatus } from '../../functions/AssignLetterStatus/assignHeatMapStatus'
import { HeatMapGrid } from './HeatMapGrid'

export const HeatMap = ({ letterList, usedLetters }) => {
  const grid = generateGrid(letterList)
  const styledGrid = assignHeatMapStatus(grid, usedLetters)

  return (
    <HeatMapGrid grid={styledGrid} gridType='heatmap' />
  )
}
