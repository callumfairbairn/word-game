import React from 'react'
import { generateGrid } from '../../functions/GridGeneration/generateGrid'
import { assignHeatMapStatus } from '../../functions/AssignLetterStatus/assignHeatMapStatus'
import { HeatMapGrid } from './HeatMapGrid'

export const HeatMap = ({ letterList, heatMap }) => {
  const grid = generateGrid(letterList)
  const styledGrid = assignHeatMapStatus(grid, heatMap)

  return (
    <HeatMapGrid grid={styledGrid} gridType='heatmap' />
  )
}
