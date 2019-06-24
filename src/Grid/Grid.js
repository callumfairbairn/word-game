import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";

export const Grid = ({xDim, yDim}) => {
    const letterGrid = generateLetterGrid(xDim, yDim);
    return (
        <div className='grid'>
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} selected={false} letter={letterGrid[x][y]} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

const generateLetterGrid = (xDim, yDim) => {
    let letters = Array.from(Array(xDim), () => {return Array.from(Array(yDim), () => {return ''})});
    letters[0][0] = 'A';
    letters[0][1] = 'B';
    letters[0][2] = 'C';
    letters[1][0] = 'D';
    letters[1][1] = 'E';
    letters[1][2] = 'F';
    letters[2][0] = 'G';
    letters[2][1] = 'H';
    letters[2][2] = 'I';
    return letters;
};

