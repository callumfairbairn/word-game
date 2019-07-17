import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../common/constants";
import {generateGrid} from "../common/functions";

export const Grid = ({letterList, input}) => {
    //TODO: Stop duplicate letters from being highlighted if they don't touch the letter after them in the input
    const grid = generateGrid(letterList);
    calculateSelectedLetters(grid, input);
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

const calculateSelectedLetters = (grid, input) => {
    for (let i = 0; i < input.length; i++) {
        for (let x = 0; x < xDim; x++) {
            for (let y = 0; y < yDim; y++) {
                if (i === 0) {
                    if (grid[x][y].letter.toLowerCase() === input[0]) {
                        grid[x][y].inputIndex = 0
                    }
                }
                if (grid[x][y].letter.toLowerCase() === input[i] &&
                    grid[x][y].inputIndex === null &&
                    isLastIndexAdjacent(grid, {x: x, y: y}, i-1)
                ) {
                    grid[x][y].inputIndex = i;
                }
            }
        }
    }
};

const isLastIndexAdjacent = (letters, location, lastIndex) => {
    for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
            if (0 <= location.x+m  && location.x+m <= xDim-1 && 0 <= location.y+n  && location.y+n <= yDim-1) {
                if (letters[location.x+m][location.y+n].inputIndex === lastIndex) {
                    return true;
                }
            }
        }
    }
    return false;
};

