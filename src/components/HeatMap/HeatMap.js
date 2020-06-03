import React from 'react'
import { assignHeatMapStatus } from '../../functions/AssignLetterStatus/assignHeatMapStatus'
import { HeatMapGrid } from './HeatMapGrid'

export const HeatMap = ({ blankGrid, heatMap }) => {
  const styledGrid = assignHeatMapStatus(blankGrid, heatMap)

  return (
    <HeatMapGrid grid={styledGrid} gridType='heatmap' />
  )
}
