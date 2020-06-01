export const getNextLetter = (location, direction, grid) => {
  if (direction === 'right') {
    return grid[location.x + 1][location.y]
  }
  if (direction === 'down') {
    return grid[location.x][location.y + 1]
  }
  if (direction === 'left') {
    return grid[location.x - 1][location.y]
  }
  if (direction === 'up') {
    return grid[location.x][location.y - 1]
  }
}