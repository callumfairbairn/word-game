import React from "react";
import './Square.scss'

export const Square = ({selected}) => {
    return (
        <div className='square' id={`${selected && 'selected'}`}/>
    )
};
