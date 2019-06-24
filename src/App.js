import React from 'react';
import './App.css';
import {Grid} from "./Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid xDim={4} yDim={4} />
    </div>
  );
}

export default App;
