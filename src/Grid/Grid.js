import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";

export const Grid = ({xDim, yDim, letterGrid, input}) => {
    const newLetterGrid = calculateSelectedLetters(letterGrid, input, xDim, yDim);
    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} status={!(newLetterGrid[x][y].inputIndex === null) ? 'selected' : ''} letter={newLetterGrid[x][y].letter} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

const calculateSelectedLetters = (letters, input, xDim, yDim) => {
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        for (let x = 0; x < xDim; x++) {
            for (let y = 0; y < yDim; y++) {
                if (i === 0) {
                    if (letters[x][y].letter.toLowerCase() === input[0]) {
                        letters[x][y].inputIndex = 0
                    }
                }
                if (letters[x][y].letter.toLowerCase() === input[i] &&
                    letters[x][y].inputIndex === null &&
                    isLastIndexAdjacent(letters, {x: x, y: y}, xDim, yDim, i-1)
                ) {
                    letters[x][y].inputIndex = i;
                }
            }
        }
    }
    return letters;
};

const isLastIndexAdjacent = (letters, location, xDim, yDim, lastIndex) => {
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

