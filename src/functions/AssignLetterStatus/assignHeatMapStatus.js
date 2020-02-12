export const assignHeatMapStatus = (grid, heatMap) => {
  let max = 0
  const minBoundary = 0.2
  const maxBoundary = 0.8

  heatMap.forEach(row => row.forEach(value => {
    if (value > max) {
      max = value
    }

  }))

  return grid.map((row, x) => row.map((letter, y) => {
    const newLetter = letter

    if (heatMap[x][y] <= max * minBoundary) {
      newLetter.status = minBoundary
    } else if (heatMap[x][y] >= max * maxBoundary) {
      newLetter.status = maxBoundary
    } else {
      newLetter.status = Math.floor(100 * heatMap[x][y] / max) / 100
    }

    return newLetter
  }))
}
