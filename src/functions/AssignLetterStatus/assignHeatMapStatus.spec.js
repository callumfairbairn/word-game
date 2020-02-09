import { generateGrid } from '../GridGeneration/generateGrid'
import { generateRandomLetterList } from '../LetterListGeneration/generateRandomLetterList'
import { generateFreshUsedLettersArray } from '../UsedLetters/generateFreshUsedLettersArray'
import { assignHeatMapStatus } from './assignHeatMapStatus'
import { calculateNewUsedLetters } from '../UsedLetters/calculateNewUsedLetters'

describe('assignHeatMapStatus', () => {
  it('assigns 0.1 status is usedLetters is fresh', () => {
    const grid = generateGrid(generateRandomLetterList())
    const usedLetters = generateFreshUsedLettersArray()
    const assignedGrid = assignHeatMapStatus(grid, usedLetters)

    assignedGrid.map(x => {
      x.map(y => {
        expect(y.status).toEqual(0.1)
      })
    })
  })

  it('assigns 0.9 for the case where max number in usedLetters is 1', () => {
    const grid = generateGrid(generateRandomLetterList())
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    const usedLetters = calculateNewUsedLetters(generateFreshUsedLettersArray(), paths)

    const assignedGrid = assignHeatMapStatus(grid, usedLetters)

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
    const usedLetters1 = calculateNewUsedLetters(generateFreshUsedLettersArray(), path1)

    const path2 = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
    const usedLetters2 = calculateNewUsedLetters(usedLetters1, path2)

    const assignedGrid = assignHeatMapStatus(grid, usedLetters2)

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
