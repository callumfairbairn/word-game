import { recursivelyFindWords } from './recursivelyFindWords'
import { nextDirectionMap } from './nextDirectionMap'

export const findWords = (grid, dict) => {
  const foundWords = []

  grid.forEach(row => {
    row.forEach((startingLetter) => {
      let newDirection = 'right'
      do {
        recursivelyFindWords([startingLetter], foundWords, newDirection, grid, dict)
        newDirection = nextDirectionMap[newDirection]
      } while (newDirection !== 'up')
    })
  })

  return foundWords
}
