import { calculateScore } from '../../functions/ScoreCalculation/calculateScore'
import { calculateNewHeatMap } from '../../functions/calculateHeatMap/calculateNewHeatMap'
import { assignLetterStatus } from '../../functions/AssignLetterStatus/assignLetterStatus'

export const resetGridMask = (input, setGridMask, blankGrid) => {
  if (input.length > 0) {
    setGridMask(blankGrid)
  }
}

export const resetInput = (setInput, resetInputField) => {
  setInput('')
  resetInputField()
}

export const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}

export const updateFoundWords = (foundWords, setFoundWords, input) => {
  const newFoundWords = foundWords
  newFoundWords.push(input)
  setFoundWords(newFoundWords)
}

export const updateScore = (score, setScore, input) => {
  setScore(score + calculateScore(input))
}

export const updateHeatMap = (heatMap, setHeatMap, paths) => {
  setHeatMap(calculateNewHeatMap(heatMap, paths))
}

export const drawPathsOnGrid = (gridSetterFunction, blankGrid, paths, wordStatus) => {
  gridSetterFunction(assignLetterStatus(blankGrid, paths, wordStatus))
}
