import React, { useState } from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";

function App() {
    const [input, setInput] = useState('');

    return (
        <div className="App">
            <Grid xDim={4} yDim={4} input={input} />
            <InputField onInput={setInput}/>
        </div>
    );
}

export default App;
