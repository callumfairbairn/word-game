export const assignLetterStatus = (grid, paths, wordStatus) => {
  const newGrid = JSON.parse(JSON.stringify(grid))
  if (paths.length > 0) {
    paths.map(path => {
      path.map((letter, i) => {
        if (Array.isArray(letter)) {
          letter.map((subletter, j) => {
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
