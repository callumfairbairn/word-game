import { generateFreshHeatMapArray } from './generateFreshHeatMapArray'
import { X_DIM, Y_DIM } from '../../common/constants'

describe('generateFreshHeatMapArray', () => {
  it('first dimension of array has length x_DIM', () => {
    expect(generateFreshHeatMapArray().length).toEqual(X_DIM)
  })

  it('second dimension of array has length Y_DIM', () => {
    expect(generateFreshHeatMapArray()[0].length).toEqual(Y_DIM)
  })

  it('contains all zeroes', () => {
    const heatMap = generateFreshHeatMapArray()

    for (let x = 0; x < heatMap.length; x++) {
      for (let y = 0; y < heatMap[0].length; y++) {
        expect(heatMap[x][y]).toEqual(0)
      }
    }
  })
})
