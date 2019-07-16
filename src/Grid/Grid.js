import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../general";

export const Grid = ({letterGrid, input}) => {
    //TODO: Stop duplicate letters from being highlighted if they don't touch the letter after them in the input
    const grid = calculateSelectedLetters(letterGrid, input);
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

const calculateSelectedLetters = (letterGrid, input) => {
    let newGrid = Array.from(Array(xDim), (_,x) => {
        return Array.from(Array(yDim), (_,y) => {
            return {
                letter: letterGrid[x][y].letter,
                inputIndex: null
            }
        })
    });
    for (let i = 0; i < input.length; i++) {
        for (let x = 0; x < xDim; x++) {
            for (let y = 0; y < yDim; y++) {
                if (i === 0) {
                    if (newGrid[x][y].letter.toLowerCase() === input[0]) {
                        newGrid[x][y].inputIndex = 0
                    }
                }
                if (newGrid[x][y].letter.toLowerCase() === input[i] &&
                    newGrid[x][y].inputIndex === null &&
                    isLastIndexAdjacent(newGrid, {x: x, y: y}, i-1)
                ) {
                    newGrid[x][y].inputIndex = i;
                }
            }
        }
    }
    return newGrid;
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

