export const putSetOfAdjacentLettersBackIn = (adjacentLetters, position, letterList) => {
  adjacentLetters.map((adjacentLetter) => {
    if (adjacentLetter.direction === 'up-left') {
      letterList[position - 5] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'up') {
      letterList[position - 4] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'up-right') {
      letterList[position - 3] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'right') {
      letterList[position + 1] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'down-right') {
      letterList[position + 5] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'down') {
      letterList[position + 4] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'down-left') {
      letterList[position + 3] = adjacentLetter.letter
    }
    if (adjacentLetter.direction === 'left') {
      letterList[position - 1] = adjacentLetter.letter
    }
  })
}
