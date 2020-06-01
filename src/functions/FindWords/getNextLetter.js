export const getNextLetter = (location, direction, grid) => {
  if (direction === 'right') {
    return grid[location.x][location.y + 1]
  }
  if (direction === 'downright') {
    return location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y + 1]
  }
  if (direction === 'down') {
    return location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y]
  }
  if (direction === 'downleft') {
    return location.x + 1 >= grid.length ? undefined : grid[location.x + 1][location.y - 1]
  }
  if (direction === 'left') {
    return grid[location.x][location.y - 1]
  }
  if (direction === 'upleft') {
    return location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y - 1]
  }
  if (direction === 'up') {
    return location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y]
  }
  if (direction === 'upright') {
    return location.x - 1 < 0 ? undefined : grid[location.x - 1][location.y + 1]
  }
}
