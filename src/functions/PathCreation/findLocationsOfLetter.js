import { X_DIM, Y_DIM } from '../../common/constants'

const findLocationsOfLetter = (grid, letter) => {
  const locationList = []
  for (let x = 0; x < X_DIM; x++) {
    for (let y = 0; y < Y_DIM; y++) {
      if (grid[x][y].letter.toLowerCase() === letter.toLowerCase()) {
        locationList.push({ x: x, y: y })
      }
    }
  }
  return locationList
}

export default findLocationsOfLetter
