import React from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid xDim={3} yDim={3} />
    </div>
  );
}

export default App;
