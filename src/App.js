import React, { useState, useEffect } from 'react';
import './App.scss';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";
import {generateRandomLetterList} from "./common/functions";
import WordDisplay from "./WordDisplay/WordDisplay";

function App() {
    const dict = require('./words');
    const letterList = generateRandomLetterList();
    return (
        <GridWrapper letterList={letterList} dict={dict} />
    );
}

const GridWrapper = ({letterList, dict}) => {
    const [input, setInput] = useState('');
    const [foundWords, setFoundWords] = useState([]);

    return (
        <div className="App">
            <div className='outer-container'>
                <div className='container-a'>
                    <Grid letterList={letterList} input={input} dict={dict} foundWords={foundWords} setFoundWords={setFoundWords} />
                    <InputField setInput={setInput} />
                </div>
                <div className='container-b'>
                    <WordDisplay foundWords={foundWords} />
                </div>
            </div>
        </div>
    );
};

export default App;
