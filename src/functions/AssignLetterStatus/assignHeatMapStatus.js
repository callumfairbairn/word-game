export const assignHeatMapStatus = (grid, usedLetters) => {
  let max = 0; let min = 0

  usedLetters.forEach(row => row.forEach(value => {
    if (value > max) {
      max = value
    }

    if (value < min) {
      min = value
    }
  }))

  return grid.map((row, x) => row.map((letter, y) => {
    const newLetter = letter

    if (usedLetters[x][y] <= min) {
      newLetter.status = 0.1
    } else if (usedLetters[x][y] >= max) {
      newLetter.status = 0.9
    } else {
      newLetter.status = Math.floor(100 * usedLetters[x][y] / max) / 100
    }

    return newLetter
  }))
}
