export const returnAdjacentLetters = (letterList, position) => {
  const adjacentLetters = []
  if (letterList[position - 4]) {
    adjacentLetters.push(
      {
        letter: letterList[position - 4],
        direction: 'up'
      }
    )
  }
  if (position % 4 < (position + 1) % 4) {
    adjacentLetters.push(
      {
        letter: letterList[position + 1],
        direction: 'right'
      }
    )
  }
  if (letterList[position + 4]) {
    adjacentLetters.push(
      {
        letter: letterList[position + 4],
        direction: 'down'
      }
    )
  }
  if (position % 4 !== 0) {
    adjacentLetters.push(
      {
        letter: letterList[position - 1],
        direction: 'left'
      }
    )
  }
  return adjacentLetters
}
