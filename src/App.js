import React from 'react';
import amwellLogo from './amwell-logo.png';
import './App.css';
import LowestThree from './LowestThree';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={amwellLogo} className="App-logo" alt="logo" />
      </div>
      <div className="App-body">
        <LowestThree />
        <p>Created by Ryan Youngdale</p>
      </div>
    </div>
  );
}

export default App;
