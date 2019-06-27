import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";

export const Grid = ({xDim, yDim, input}) => {
    const letterGrid = generateLetterGrid(xDim, yDim);
    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} selected={isSelected(input, letterGrid[x][y])} letter={letterGrid[x][y]} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

const isSelected = (input, letter) => {
    return input.includes(letter.toLowerCase())
};

const generateLetterGrid = (xDim, yDim) => {
    let letters = Array.from(Array(xDim), () => {return Array.from(Array(yDim), () => {return ''})});
    letters[0][0] = 'A';
    letters[0][1] = 'B';
    letters[0][2] = 'C';
    letters[0][3] = 'D';
    letters[1][0] = 'E';
    letters[1][1] = 'F';
    letters[1][2] = 'G';
    letters[1][3] = 'H';
    letters[2][0] = 'I';
    letters[2][1] = 'J';
    letters[2][2] = 'K';
    letters[2][3] = 'L';
    letters[3][0] = 'M';
    letters[3][1] = 'N';
    letters[3][2] = 'O';
    letters[3][3] = 'P';
    return letters;
};

