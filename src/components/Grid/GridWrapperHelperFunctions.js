import { calculateScore } from '../../functions/ScoreCalculation/calculateScore'

export const resetGridMask = (input, setGridMask, blankGrid) => {
  if (input.length > 0) {
    setGridMask(blankGrid)
  }
}

export const resetInput = (setInput, resetInputField) => {
  setInput('')
  resetInputField()
}

export const updateFoundWords = (foundWords, setFoundWords, input) => {
  const newFoundWords = foundWords
  newFoundWords.push(input)
  setFoundWords(newFoundWords)
}

export const updateScore = (score, setScore, input) => {
  setScore(score + calculateScore(input))
}
