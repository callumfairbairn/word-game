import React from "react";
import './Square.scss'

export const Square = ({selected, letter}) => {
    return (
        <div className='square' id={`${selected ? 'selected' : ''}`} data-testid={`square${selected ? '-selected' : ''}`}>
            <div className='letter'>
                {letter}
            </div>
        </div>
    )
};
