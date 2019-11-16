import React from 'react'
import './Grid.scss'
import { Square } from '../Square/Square'
import {generateGrid} from "../../functions/Generation/generation";
import createPaths from "../../functions/PathCreation/createPaths";
import isWordInDictionary from "../../functions/WordValidation/isWordInDictionary";
import {assignLetterStatus} from "../../functions/AssignLetterStatus/assignLetterStatus";
import {xDim, yDim} from "../../common/constants";

export const Grid = ({ letterList, input, dict, foundWords, setFoundWords }) => {
  const grid = generateGrid(letterList)
  const paths = createPaths(grid, input)
  const wordInDictionary = isWordInDictionary(input, dict, foundWords)
  const assignedGrid = assignLetterStatus(grid, paths, wordInDictionary)

  if (wordInDictionary) {
    const newFoundWords = foundWords
    newFoundWords.push(input)
    setFoundWords(newFoundWords)
    resetInputField()
  }

  return (
    <div className='grid' data-testid='grid' key={input}>
      {Array.from(Array(yDim), (_, y) =>
        <div className='row' key={y}>
          {Array.from(Array(xDim), (_, x) =>
            <div className='column' key={x}>
              <Square key={[x, y]} status={assignedGrid[x][y].status} letter={assignedGrid[x][y].letter} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}


const resetInputField = () => {
  if (document.getElementById('input-field')) {
    document.getElementById('input-field').reset()
  }
}
