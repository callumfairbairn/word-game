import { xDim, yDim } from '../common/constants'

const findLocationsOfLetter = (grid, letter) => {
  const locationList = []
  for (let x = 0; x < xDim; x++) {
    for (let y = 0; y < yDim; y++) {
      if (grid[x][y].letter.toLowerCase() === letter.toLowerCase()) {
        locationList.push({ x: x, y: y })
      }
    }
  }
  return locationList
}

export default findLocationsOfLetter
