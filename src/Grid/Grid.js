import React from "react";
import './Grid.scss'
import {Square} from "../Square/Square";

export const Grid = ({xDim, yDim}) => {
    return (
        <div className='grid'>
            {Array.from(Array(yDim), (_,y) =>
                <div className='row' key={y}>
                    {Array.from(Array(xDim), (_,x) =>
                        <div className='column' key={x}>
                            <Square key={[x, y]} selected={false} letter={'A'} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

