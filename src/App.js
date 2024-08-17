import React, { useEffect, useState } from 'react';
import './App.css';
import SyllableButton from './Button';

function App() {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = () => setVoices(synth.getVoices());
    } else {
      setVoices(synth.getVoices());
    }
  }, []);

  const speakSyllable = (syllable) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(syllable);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9; // Sprechgeschwindigkeit (langsamer)
      utterance.pitch = 1;  // Tonhöhe

      // Suche nach einer deutschen Stimme
      const germanVoices = voices.filter(voice => voice.lang === 'de-DE');
      if (germanVoices.length > 0) {
        utterance.voice = germanVoices[0]; // Wähle die erste verfügbare deutsche Stimme
      }

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Ihr Browser unterstützt die Web Speech API nicht.');
    }
  };

  return (
    <div className="App">
      <h1>Silbenauswahl mit deutscher Sprachausgabe</h1>
      <p>Lies vor, klicke und finde lustige Wörter:</p>
      <div className="button-container">
        <SyllableButton index={0} onSpeak={speakSyllable} />
        <SyllableButton index={1} onSpeak={speakSyllable} />
        <SyllableButton index={2} onSpeak={speakSyllable} />
        <SyllableButton index={0} onSpeak={speakSyllable} />
        <SyllableButton index={1} onSpeak={speakSyllable} />
        <SyllableButton index={2} onSpeak={speakSyllable} />
      </div>
      <p>Sprachausgabe ist wirklich schrottig!</p>
    </div>
  );
}

export default App;
