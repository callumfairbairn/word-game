export const returnAdjacentLetters = (letterList, position) => {
  if (letterList.length !== 16) {
    throw new Error('letterList not 16 letters long')
  }

  const adjacentLetters = []

  if (isNotOnLeftEdge(position) && isNotOnTopEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position - 5],
        direction: 'up-left'
      }
    )
  }
  if (isNotOnTopEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position - 4],
        direction: 'up'
      }
    )
  }
  if (isNotOnTopEdge(position) && isNotOnRightEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position - 3],
        direction: 'up-right'
      }
    )
  }
  if (isNotOnRightEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position + 1],
        direction: 'right'
      }
    )
  }
  if (isNotOnRightEdge(position) && isNotOnBottomEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position + 5],
        direction: 'down-right'
      }
    )
  }
  if (isNotOnBottomEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position + 4],
        direction: 'down'
      }
    )
  }
  if (isNotOnBottomEdge(position) && isNotOnLeftEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position + 3],
        direction: 'down-left'
      }
    )
  }
  if (isNotOnLeftEdge(position)) {
    adjacentLetters.push(
      {
        letter: letterList[position - 1],
        direction: 'left'
      }
    )
  }
  return adjacentLetters
}

const isNotOnLeftEdge = (position) => {
  return position % 4 !== 0
}

const isNotOnRightEdge = (position) => {
  return position % 4 < (position + 1) % 4
}

const isNotOnTopEdge = (position) => {
  return position > 3
}

const isNotOnBottomEdge = (position) => {
  return position < 12
}
