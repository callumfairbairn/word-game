import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";

export const Grid = ({xDim, yDim, input}) => {
    const letterGrid = generateLetterGrid(xDim, yDim, input);
    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} selected={!(letterGrid[x][y].inputIndex === null)} letter={letterGrid[x][y].letter} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

const generateLetterGrid = (xDim, yDim, input) => {
    let letters = Array.from(Array(xDim), () => {return Array.from(Array(yDim), () => {return {}})});
    letters[0][0] = {letter: 'A', inputIndex: null};
    letters[0][1] = {letter: 'B', inputIndex: null};
    letters[0][2] = {letter: 'C', inputIndex: null};
    letters[0][3] = {letter: 'D', inputIndex: null};
    letters[1][0] = {letter: 'E', inputIndex: null};
    letters[1][1] = {letter: 'F', inputIndex: null};
    letters[1][2] = {letter: 'G', inputIndex: null};
    letters[1][3] = {letter: 'H', inputIndex: null};
    letters[2][0] = {letter: 'I', inputIndex: null};
    letters[2][1] = {letter: 'J', inputIndex: null};
    letters[2][2] = {letter: 'K', inputIndex: null};
    letters[2][3] = {letter: 'L', inputIndex: null};
    letters[3][0] = {letter: 'M', inputIndex: null};
    letters[3][1] = {letter: 'N', inputIndex: null};
    letters[3][2] = {letter: 'O', inputIndex: null};
    letters[3][3] = {letter: 'P', inputIndex: null};
    return calculateSelectedLetters(letters, input, xDim, yDim);
};

const calculateSelectedLetters = (letters, input, xDim, yDim) => {
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

