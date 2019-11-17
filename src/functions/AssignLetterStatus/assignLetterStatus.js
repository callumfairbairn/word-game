export const assignLetterStatus = (grid, paths, wordStatus) => {
  if (paths.length > 0) {
    paths.map(path => {
      path.map((letter, i) => {
        if (Array.isArray(letter)) {
          letter.map((subletter, j) => {
            grid[letter[j].x][letter[j].y].status = wordStatus
          })
        } else {
          grid[path[i].x][path[i].y].status = wordStatus
        }
      })
    })
  }

  return grid
}
