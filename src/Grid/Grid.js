import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../common/constants";
import {forGridAndInputExecuteFunction, generateGrid} from "../common/functions";

export const Grid = ({letterList, input}) => {
    const grid = generateGrid(letterList);
    forGridAndInputExecuteFunction(grid, input, calculateSelectedLetters);
    forGridAndInputExecuteFunction(grid, input, getRidOfLoneSelectedLetters);

    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} status={!(grid[x][y].inputIndex === null) ? 'selected' : ''} letter={grid[x][y].letter} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

const calculateSelectedLetters = (grid, input, i, x, y) => {
    if (grid[x][y].letter.toLowerCase() === input[i] &&
        grid[x][y].inputIndex === null &&
        ((i === 0) ? true : isIndexAdjacent(grid,  x ,y, i-1))
    ) {
        grid[x][y].inputIndex = i;
    }
};

const isIndexAdjacent = (grid, x, y, index) => {
    for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
            if (0 <= x+m  && x+m <= xDim-1 && 0 <= y+n  && y+n <= yDim-1 && grid[x+m][y+n].inputIndex === index) {
                return true;
            }
        }
    }
    return false;
};

const getRidOfLoneSelectedLetters = (grid, input, i, x, y) => {
    // This gets rid of all selected letters if a wrong letter is typed in because the last letter cannot be placed and
    // therefore no letter can be adjacent to that incorrect letter.
    // Also, if a letter is a valid duplicate, all letters will be unselected because calculateSelectedLetters only
    // places the next inputIndex if the letter has a null input index. Therefore, the inputIndex corresponding to the
    // last letter of the input will never be in the grid.
    if (grid[x][y].inputIndex < input.length-1 &&
        !isIndexAdjacent(grid, x, y, grid[x][y].inputIndex+1)) {
        grid[x][y].inputIndex = null
    }
};

export const returnPositionsOfAdjacentGivenLetters = (grid, x, y, letter) => {
    const newListOfPositions = [];
    if (letter) {
        for (let m = -1; m < 2; m++) {
            for (let n = -1; n < 2; n++) {
                if (0 <= x+m  && x+m <= xDim-1 && 0 <= y+n  && y+n <= yDim-1 && grid[x+m][y+n].letter.toLowerCase() === letter) {
                    newListOfPositions.push({x: x+m, y: y+n});
                }
            }
        }
    }
    return newListOfPositions
};

export const findLocationsOfLetter = (grid, letter) => {
    const locationList = [];
    for (let x = 0; x < xDim; x++) {
        for (let y = 0; y < yDim; y++) {
            if (grid[x][y].letter.toLowerCase() === letter.toLowerCase()) {
                locationList.push({x: x, y: y})
            }
        }
    }
    return locationList
};