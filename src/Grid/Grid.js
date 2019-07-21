import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../common/constants";
import {forInputAndGridExecuteFunction, generateGrid} from "../common/functions";

export const Grid = ({letterList, input}) => {
    const grid = generateGrid(letterList);
    forInputAndGridExecuteFunction(grid, input, calculateSelectedLetters);
    forInputAndGridExecuteFunction(grid, input, getRidOfLoneSelectedLetters);
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
    if (i === 0) {
        if (grid[x][y].letter.toLowerCase() === input[0]) {
            grid[x][y].inputIndex = 0;
        }
    }
    if (grid[x][y].letter.toLowerCase() === input[i] &&
        grid[x][y].inputIndex === null &&
        isIndexAdjacent(grid, {x: x, y: y}, i-1)
    ) {
        grid[x][y].inputIndex = i;
    }
};

const isIndexAdjacent = (grid, location, index) => {
    for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
            if (0 <= location.x+m  && location.x+m <= xDim-1 && 0 <= location.y+n  && location.y+n <= yDim-1) {
                if (grid[location.x+m][location.y+n].inputIndex === index) {
                    return true;
                }
            }
        }
    }
    return false;
};

const getRidOfLoneSelectedLetters = (grid, input, i, x, y) => {
    if (grid[x][y].inputIndex < input.length-1 &&
        !isIndexAdjacent(grid, {x, y}, grid[x][y].inputIndex+1)) {
        grid[x][y].inputIndex = null
    }
};

