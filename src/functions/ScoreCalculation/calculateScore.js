import { letterValues } from '../../common/letterScores'

export const calculateScore = (word) => {
  let score = 0;

  [...word].forEach(letter => {
    score = score + letterValues[letter.toUpperCase()]
  })

  return score
}
