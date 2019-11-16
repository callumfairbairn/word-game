export const assignLetterStatus = (grid, paths, inputValid) => {
  const status = inputValid ? 'correct' : 'selected'
  if (paths.length > 0) {
    paths.map(path => {
      path.map((letter, i) => {
        if (Array.isArray(letter)) {
          letter.map((subletter, j) => {
            grid[letter[j].x][letter[j].y].status = status
          })
        } else {
          grid[path[i].x][path[i].y].status = status
        }
      })
    })
  }

  return grid
}
