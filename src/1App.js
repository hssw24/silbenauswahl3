import React from 'react';
import './App.css';
import SyllableButton from './Button';

function App() {
  return (
    <div className="App">
      <h1>Silbenauswahl</h1>
      <p>Lies vor, klicke und finde lustige Wörter.</p>
      <div className="button-container">
        <SyllableButton index={0} /> 
        <SyllableButton index={1} />
        <SyllableButton index={2} />
      </div>
    </div>
  );
}

export default App;
