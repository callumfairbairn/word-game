import { generateGrid } from '../GridGeneration/generateGrid'
import { generateRandomLetterList } from '../LetterListGeneration/generateRandomLetterList'
import { generateFreshHeatMapArray } from '../calculateHeatMap/generateFreshHeatMapArray'
import { assignHeatMapStatus } from './assignHeatMapStatus'
import { calculateNewHeatMap } from '../calculateHeatMap/calculateNewHeatMap'

describe('assignHeatMapStatus', () => {
  it('assigns 0.1 status is heatMap is fresh', () => {
    const grid = generateGrid(generateRandomLetterList())
    const heatMap = generateFreshHeatMapArray()
    const assignedGrid = assignHeatMapStatus(grid, heatMap)

    assignedGrid.map(x => {
      x.map(y => {
        expect(y.status).toEqual(0.1)
      })
    })
  })

  it('assigns 0.9 for the case where max number in heatMap is 1', () => {
    const grid = generateGrid(generateRandomLetterList())
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    const heatMap = calculateNewHeatMap(generateFreshHeatMapArray(), paths)

    const assignedGrid = assignHeatMapStatus(grid, heatMap)

    expect(assignedGrid[0][0].status).toEqual(0.9)
    expect(assignedGrid[0][1].status).toEqual(0.9)
    expect(assignedGrid[0][2].status).toEqual(0.9)
    expect(assignedGrid[0][3].status).toEqual(0.1)
    expect(assignedGrid[1][0].status).toEqual(0.1)
    expect(assignedGrid[1][1].status).toEqual(0.1)
    expect(assignedGrid[1][2].status).toEqual(0.1)
    expect(assignedGrid[1][3].status).toEqual(0.1)
    expect(assignedGrid[2][0].status).toEqual(0.1)
    expect(assignedGrid[2][1].status).toEqual(0.1)
    expect(assignedGrid[2][2].status).toEqual(0.1)
    expect(assignedGrid[2][3].status).toEqual(0.1)
    expect(assignedGrid[3][0].status).toEqual(0.1)
    expect(assignedGrid[3][1].status).toEqual(0.1)
    expect(assignedGrid[3][2].status).toEqual(0.1)
    expect(assignedGrid[3][3].status).toEqual(0.1)
  })

  it('assigns 0.5 for the case where a number is half of the max number', () => {
    const grid = generateGrid(generateRandomLetterList())
    const path1 = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    const heatMap1 = calculateNewHeatMap(generateFreshHeatMapArray(), path1)

    const path2 = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
    const heatMap2 = calculateNewHeatMap(heatMap1, path2)

    const assignedGrid = assignHeatMapStatus(grid, heatMap2)

    expect(assignedGrid[0][0].status).toEqual(0.9)
    expect(assignedGrid[0][1].status).toEqual(0.5)
    expect(assignedGrid[0][2].status).toEqual(0.5)
    expect(assignedGrid[0][3].status).toEqual(0.1)
    expect(assignedGrid[1][0].status).toEqual(0.1)
    expect(assignedGrid[1][1].status).toEqual(0.5)
    expect(assignedGrid[1][2].status).toEqual(0.5)
    expect(assignedGrid[1][3].status).toEqual(0.1)
    expect(assignedGrid[2][0].status).toEqual(0.1)
    expect(assignedGrid[2][1].status).toEqual(0.1)
    expect(assignedGrid[2][2].status).toEqual(0.1)
    expect(assignedGrid[2][3].status).toEqual(0.1)
    expect(assignedGrid[3][0].status).toEqual(0.1)
    expect(assignedGrid[3][1].status).toEqual(0.1)
    expect(assignedGrid[3][2].status).toEqual(0.1)
    expect(assignedGrid[3][3].status).toEqual(0.1)
  })
})
