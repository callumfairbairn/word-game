export const assignLetterStatus = (grid, paths, wordStatus) => {
  const newGrid = JSON.parse(JSON.stringify(grid))
  if (paths.length > 0) {
    paths.forEach(path => {
      path.forEach((letter, i) => {
        if (Array.isArray(letter)) {
          letter.forEach((subletter, j) => {
            newGrid[letter[j].x][letter[j].y].status = wordStatus
          })
        } else {
          newGrid[path[i].x][path[i].y].status = wordStatus
        }
      })
    })
  }

  return newGrid
}
