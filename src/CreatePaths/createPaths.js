import returnPositionsOfAdjacentCharacters from './returnPositionsOfAdjacentCharacters'
import findLocationsOfLetter from './findLocationsOfLetter'
import fixLetter from './fixLetter'
import removePreviouslyFoundLetters from './removePreviouslyFoundLetters'

const createPaths = (grid, input) => {
  if (input.length === 0) {
    return []
  }

  const paths = []
  const startingPlaces = findLocationsOfLetter(grid, input[0])
  for (let n = 0; n < startingPlaces.length; n++) {
    const initialLetter = startingPlaces[n]
    const thisPath = [initialLetter]
    let startingLetterValid = true
    for (let i = 0; i < input.length - 1 && startingLetterValid; i++) {
      let previousLetters = thisPath[i]
      previousLetters = Array.isArray(previousLetters) ? previousLetters : [previousLetters]
      const adjacentLetters = returnPositionsOfAdjacentCharacters(grid, previousLetters, input[i + 1])

      const fixedAdjacentLetters = removePreviouslyFoundLetters(adjacentLetters, thisPath)

      if (fixedAdjacentLetters.length === 0) {
        startingLetterValid = false
      } else {
        if (fixedAdjacentLetters.length > 1) {
          thisPath.push(fixedAdjacentLetters)
        } else {
          thisPath.push(...fixedAdjacentLetters)
        }
      }
    }
    if (startingLetterValid) {
      const fixedPath = fixPath(thisPath)
      paths.push([...fixedPath])
    }
  }
  return paths
}

const fixPath = path => {
  for (let j = path.length - 2; j > 0; j--) {
    const thisLetter = path[j]
    if (Array.isArray(thisLetter)) {
      const nextLetter = Array.isArray(path[j + 1]) ? path[j + 1] : [path[j + 1]]
      const fixedLetter = fixLetter(thisLetter, nextLetter)

      if (fixedLetter.length > 1) {
        path.splice(j, 1, fixedLetter)
      } else {
        path.splice(j, 1, ...fixedLetter)
      }
    }
  }
  return path
}

export default createPaths
