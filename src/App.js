import React from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";
import {InputField} from "./InputField/InputField";

function App() {
  return (
    <div className="App">
      <Grid xDim={4} yDim={4} />
      <InputField/>
    </div>
  );
}

export default App;
