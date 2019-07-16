import React, { useState } from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";
import {generateRandomLetterGrid} from "./general";

function App() {
    const letterGrid = generateRandomLetterGrid();
    return (
        <GridWrapper letterGrid={letterGrid}/>
    );
}

const GridWrapper = ({letterGrid}) => {
    const [input, setInput] = useState('');
    return (
        <div className="App">
            <Grid letterGrid={letterGrid} input={input} />
            <InputField onInput={setInput}/>
        </div>
    );
};

export default App;
