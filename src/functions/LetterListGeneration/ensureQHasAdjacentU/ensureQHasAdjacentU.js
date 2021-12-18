import { returnNumberOfTimesSetAppearsInList } from '../common/returnNumberOfTimesSetAppearsInList'
import { addLetterFromSet } from '../common/addAndTakeAwayLetterFromSet'
import { returnAdjacentLetters } from '../common/returnAdjacentLetters'
import { putSetOfAdjacentLettersBackIn } from '../common/putSetOfAdjacentLettersBackIn'

export const ensureQHasAdjacentU = (letterList) => {
  letterList.forEach((letter, position) => {
    if (letter === 'Q') {
      const adjacentLetters = returnAdjacentLetters(letterList, position)
      const adjacentLettersWithoutDirection = adjacentLetters.map(adjacentLetter => adjacentLetter.letter)

      if (!adjacentLettersWithoutDirection.includes('U')) {
        addLetterFromSet(adjacentLettersWithoutDirection, ['U'])

        adjacentLettersWithoutDirection.forEach((adjacentLetter, adjacentLetterPosition) => {
          adjacentLetters[adjacentLetterPosition].letter = adjacentLetter
        })

        putSetOfAdjacentLettersBackIn(adjacentLetters, position, letterList)
      }
    }
  })

  for (let x = 0; x < returnNumberOfTimesSetAppearsInList(letterList, ['Q']); x++) {
    addLetterFromSet(letterList, ['U'])
  }
}
