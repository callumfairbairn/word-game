import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";
import {xDim, yDim} from "../common/constants";
import {generateGrid} from "../common/functions";
import pathFindingAlgorithm from "../common/pathFindingAlgorithm";

export const Grid = ({letterList, input}) => {
    const grid = generateGrid(letterList);
    const paths = pathFindingAlgorithm(grid, input);
    const assignedGrid = assignLetterStatus(grid, paths);

    return (
        <div className='grid' key={input} >
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} status={!(assignedGrid[x][y].inputIndex === null) ? 'selected' : ''} letter={assignedGrid[x][y].letter} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

export const assignLetterStatus = (grid, paths) => {
    if (paths.length > 0) {
        paths.map(path => {
            path.map((letter, i) => {
                if (Array.isArray(letter)) {
                    letter.map((_, j) => {
                        console.log(letter, paths);
                        grid[letter[j].x][letter[j].y].inputIndex = 1;
                    })
                } else {
                    grid[path[i].x][path[i].y].inputIndex = 1;
                }
            })
        })
    }

    return grid
};
