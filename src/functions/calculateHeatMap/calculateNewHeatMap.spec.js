import { generateFreshHeatMapArray } from './generateFreshHeatMapArray'
import { X_DIM, Y_DIM } from '../../common/constants'
import { calculateNewHeatMap } from './calculateNewHeatMap'

describe('calculateNewHeatMap', () => {
  it('returns a two dimensional array', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    expect(calculateNewHeatMap(heatMap, paths).length).toEqual(X_DIM)
    expect(calculateNewHeatMap(heatMap, paths)[0].length).toEqual(Y_DIM)
  })

  it('adds one to each element corresponding to a coordinate in paths, and doesnt change other coords', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    const newHeatMap = calculateNewHeatMap(heatMap, paths)

    expect(newHeatMap[0][0]).toEqual(1)
    expect(newHeatMap[0][1]).toEqual(1)
    expect(newHeatMap[0][2]).toEqual(1)
    expect(newHeatMap[0][3]).toEqual(0)
    expect(newHeatMap[1][0]).toEqual(0)
    expect(newHeatMap[1][1]).toEqual(0)
    expect(newHeatMap[1][2]).toEqual(0)
    expect(newHeatMap[1][3]).toEqual(0)
    expect(newHeatMap[2][0]).toEqual(0)
    expect(newHeatMap[2][1]).toEqual(0)
    expect(newHeatMap[2][2]).toEqual(0)
    expect(newHeatMap[2][3]).toEqual(0)
    expect(newHeatMap[3][0]).toEqual(0)
    expect(newHeatMap[3][1]).toEqual(0)
    expect(newHeatMap[3][2]).toEqual(0)
    expect(newHeatMap[3][3]).toEqual(0)
  })

  it('works for multiple starting paths with all different letters', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [[{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }]]
    const newHeatMap = calculateNewHeatMap(heatMap, paths)

    expect(newHeatMap[0][0]).toEqual(1)
    expect(newHeatMap[0][1]).toEqual(1)
    expect(newHeatMap[0][2]).toEqual(1)
    expect(newHeatMap[0][3]).toEqual(0)
    expect(newHeatMap[1][0]).toEqual(0)
    expect(newHeatMap[1][1]).toEqual(0)
    expect(newHeatMap[1][2]).toEqual(0)
    expect(newHeatMap[1][3]).toEqual(0)
    expect(newHeatMap[2][0]).toEqual(0)
    expect(newHeatMap[2][1]).toEqual(0)
    expect(newHeatMap[2][2]).toEqual(0)
    expect(newHeatMap[2][3]).toEqual(0)
    expect(newHeatMap[3][0]).toEqual(0)
    expect(newHeatMap[3][1]).toEqual(1)
    expect(newHeatMap[3][2]).toEqual(1)
    expect(newHeatMap[3][3]).toEqual(1)
  })

  it('works for multiple starting paths with similar letters', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [[{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]]
    const newHeatMap = calculateNewHeatMap(heatMap, paths)

    expect(newHeatMap[0][0]).toEqual(1)
    expect(newHeatMap[0][1]).toEqual(1)
    expect(newHeatMap[0][2]).toEqual(1)
    expect(newHeatMap[0][3]).toEqual(0)
    expect(newHeatMap[1][0]).toEqual(1)
    expect(newHeatMap[1][1]).toEqual(0)
    expect(newHeatMap[1][2]).toEqual(0)
    expect(newHeatMap[1][3]).toEqual(0)
    expect(newHeatMap[2][0]).toEqual(0)
    expect(newHeatMap[2][1]).toEqual(0)
    expect(newHeatMap[2][2]).toEqual(0)
    expect(newHeatMap[2][3]).toEqual(0)
    expect(newHeatMap[3][0]).toEqual(0)
    expect(newHeatMap[3][1]).toEqual(0)
    expect(newHeatMap[3][2]).toEqual(0)
    expect(newHeatMap[3][3]).toEqual(0)
  })

  it('works for a fork in the middle of a single path', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [{ x: 0, y: 0 }, [{ x: 0, y: 1 }, { x: 1, y: 1 }], { x: 0, y: 2 }]
    const newHeatMap = calculateNewHeatMap(heatMap, paths)

    expect(newHeatMap[0][0]).toEqual(1)
    expect(newHeatMap[0][1]).toEqual(1)
    expect(newHeatMap[0][2]).toEqual(1)
    expect(newHeatMap[0][3]).toEqual(0)
    expect(newHeatMap[1][0]).toEqual(0)
    expect(newHeatMap[1][1]).toEqual(1)
    expect(newHeatMap[1][2]).toEqual(0)
    expect(newHeatMap[1][3]).toEqual(0)
    expect(newHeatMap[2][0]).toEqual(0)
    expect(newHeatMap[2][1]).toEqual(0)
    expect(newHeatMap[2][2]).toEqual(0)
    expect(newHeatMap[2][3]).toEqual(0)
    expect(newHeatMap[3][0]).toEqual(0)
    expect(newHeatMap[3][1]).toEqual(0)
    expect(newHeatMap[3][2]).toEqual(0)
    expect(newHeatMap[3][3]).toEqual(0)
  })

  it('works for a fork in the middle of a double path', () => {
    const heatMap = generateFreshHeatMapArray()
    const paths = [[{ x: 0, y: 0 }, [{ x: 0, y: 1 }, { x: 1, y: 1 }], { x: 0, y: 2 }], [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }]]
    const newHeatMap = calculateNewHeatMap(heatMap, paths)

    expect(newHeatMap[0][0]).toEqual(1)
    expect(newHeatMap[0][1]).toEqual(1)
    expect(newHeatMap[0][2]).toEqual(1)
    expect(newHeatMap[0][3]).toEqual(0)
    expect(newHeatMap[1][0]).toEqual(0)
    expect(newHeatMap[1][1]).toEqual(1)
    expect(newHeatMap[1][2]).toEqual(0)
    expect(newHeatMap[1][3]).toEqual(0)
    expect(newHeatMap[2][0]).toEqual(0)
    expect(newHeatMap[2][1]).toEqual(0)
    expect(newHeatMap[2][2]).toEqual(0)
    expect(newHeatMap[2][3]).toEqual(0)
    expect(newHeatMap[3][0]).toEqual(0)
    expect(newHeatMap[3][1]).toEqual(1)
    expect(newHeatMap[3][2]).toEqual(1)
    expect(newHeatMap[3][3]).toEqual(1)
  })
})
