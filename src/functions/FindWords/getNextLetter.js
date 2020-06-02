export const getNextLetter = (location, direction, grid) => {
  return directionFunctionMap[direction](location, grid)
}

const directionFunctionMap = {
  right: (location, grid) => grid[location.x][location.y + 1],
  downright: (location, grid) => location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y + 1],
  down: (location, grid) => location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y],
  downleft: (location, grid) => location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y - 1],
  left: (location, grid) => grid[location.x][location.y - 1],
  upleft: (location, grid) => location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y - 1],
  up: (location, grid) => location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y],
  upright: (location, grid) => location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y + 1]
}
