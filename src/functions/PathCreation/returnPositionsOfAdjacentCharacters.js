import { xDim, yDim } from '../../common/constants'

const returnPositionsOfAdjacentCharacters = (grid, letters, character) => {
  const newListOfPositions = []
  letters.map(letter => {
    if (character) {
      for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
          if (letter.x + m >= 0 &&
                        letter.x + m <= xDim - 1 &&
                        letter.y + n >= 0 &&
                        letter.y + n <= yDim - 1 &&
                        !(m === 0 && n === 0) &&
                        grid[letter.x + m][letter.y + n].letter.toLowerCase() === character) {
            let notDuplicate = true
            for (let i = 0; i < newListOfPositions.length; i++) {
              if (newListOfPositions[i].x === letter.x + m &&
                                newListOfPositions[i].y === letter.y + n) {
                notDuplicate = false
              }
            }
            if (notDuplicate) {
              newListOfPositions.push({ x: letter.x + m, y: letter.y + n })
            }
          }
        }
      }
    }
    return letter
  })
  return newListOfPositions
}

export default returnPositionsOfAdjacentCharacters
