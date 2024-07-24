import React from 'react';
import './App.css';
import SyllableButton from './Button';

function App() {
  const speakSyllable = (syllable) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(syllable);
      utterance.lang = 'de-DE'; // Spracheinstellung für Deutsch
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Ihr Browser unterstützt die Web Speech API nicht.');
    }
  };

  return (
    <div className="App">
      <h1>Syllable Selector with Speech</h1>
      <div className="button-container">
        <SyllableButton index={0} onSpeak={speakSyllable} />
        <SyllableButton index={1} onSpeak={speakSyllable} />
        <SyllableButton index={2} onSpeak={speakSyllable} />
      </div>
    </div>
  );
}

export default App;
