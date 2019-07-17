import React, { useState } from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";
import {generateRandomLetterList} from "./common/functions";

function App() {
    const letterList = generateRandomLetterList();
    return (
        <GridWrapper letterList={letterList}/>
    );
}

const GridWrapper = ({letterList}) => {
    const [input, setInput] = useState('');
    return (
        <div className="App">
            <Grid letterList={letterList} input={input} />
            <InputField onInput={setInput}/>
        </div>
    );
};

export default App;
