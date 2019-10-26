import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../common/constants";
import {generateGrid} from "../common/functions";
import createPaths from "../CreatePaths/createPaths";
import isInputValid from "../WordValidation/isInputValid";

export const Grid = ({letterList, input, dict}) => {
    const grid = generateGrid(letterList);
    const paths = createPaths(grid, input);
    const inputValid = isInputValid(input, dict);
    const assignedGrid = assignLetterStatus(grid, paths, inputValid);

    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} status={assignedGrid[x][y].status} letter={assignedGrid[x][y].letter} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

export const assignLetterStatus = (grid, paths, inputValid) => {
    const status = inputValid ? 'correct' : 'selected';
    if (paths.length > 0) {
        paths.map(path => {
            path.map((letter, i) => {
                if (Array.isArray(letter)) {
                    letter.map((_, j) => {
                        grid[letter[j].x][letter[j].y].status = status;
                    })
                } else {
                    grid[path[i].x][path[i].y].status = status;
                }
            })
        })
    }

    return grid
};
