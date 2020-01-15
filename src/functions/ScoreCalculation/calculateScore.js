import {letterValues} from "../../common/letterScores";

export const calculateScore = (word) => {
  let score = 0;

  [...word].map(letter => {
    score = score + letterValues[letter.toUpperCase()]
  })

  return score
}