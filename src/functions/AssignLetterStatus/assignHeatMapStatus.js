export const assignHeatMapStatus = (grid, heatMap) => {
  let max = 0; let min = 0

  heatMap.forEach(row => row.forEach(value => {
    if (value > max) {
      max = value
    }

    if (value < min) {
      min = value
    }
  }))

  return grid.map((row, x) => row.map((letter, y) => {
    const newLetter = letter

    if (heatMap[x][y] <= min) {
      newLetter.status = 0.1
    } else if (heatMap[x][y] >= max) {
      newLetter.status = 0.9
    } else {
      newLetter.status = Math.floor(100 * heatMap[x][y] / max) / 100
    }

    return newLetter
  }))
}
