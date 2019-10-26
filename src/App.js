import React, { useState } from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";
import {generateRandomLetterList} from "./common/functions";

function App() {
    const dict = require('./words');
    const letterList = generateRandomLetterList();
    return (
        <GridWrapper letterList={letterList} dict={dict} />
    );
}

const GridWrapper = ({letterList, dict}) => {
    const [input, setInput] = useState('');
    return (
        <div className="App">
            <Grid letterList={letterList} input={input} dict={dict} />
            <InputField onInput={setInput}/>
        </div>
    );
};

export default App;
