import React, { useState } from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";
import {generateRandomGrid} from "./general";

function App() {
    const xDim = 4, yDim = 4;
    const letterGrid = generateRandomGrid(xDim, yDim);
    return (
        <GridWrapper xDim={4} yDim={4} letterGrid={letterGrid}/>
    );
}

const GridWrapper = ({xDim, yDim, letterGrid}) => {
    const [input, setInput] = useState('');
    return (
        <div className="App">
            <Grid xDim={xDim} yDim={yDim} letterGrid={letterGrid} input={input} />
            <InputField onInput={setInput}/>
        </div>
    );
};

export default App;
