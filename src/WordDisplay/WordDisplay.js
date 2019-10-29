import React from "react";

const WordDisplay = ({ foundWords }) => {
    return (
        <div data-testid='word-display'>
            {foundWords.map(word => {return <div key={word} >{word}</div>})}
        </div>
    )
};

export default WordDisplay;