import React, { useState } from 'react';

const syllables = [
  ["BA", "BE", "BI", "BO", "BU", "DA", "DE", "DI", "DO", "DU", "FA", "FE", "FI", "FO", "FU", "GA", "GE", "GI", "GO", "GU", "HA", "HE", "HI", "HO", "HU", "JA", "JE", "JI", "JO", "JU"],
  ["KA", "KE", "KI", "KO", "KU", "LA", "LE", "LI", "LO", "LU", "MA", "ME", "MI", "MO", "MU", "NA", "NE", "NI", "NO", "NU", "PA", "PE", "PI", "PO", "PU", "RA", "RE", "RI", "RO", "RU"],
  ["SA", "SE", "SI", "SO", "SU", "TA", "TE", "TI", "TO", "TU", "VA", "VE", "VI", "VO", "VU", "WA", "WE", "WI", "WO", "WU", "ZA", "ZE", "ZI", "ZO", "ZU", "PI", "MA", "PA", "PO", "LA"]
  ];

function SyllableButton({ index, onSpeak }) {
  const [currentSyllable, setCurrentSyllable] = useState(syllables[index][0]);

  const handleClick = () => {
    const nextIndex = (syllables[index].indexOf(currentSyllable) + 1) % syllables[index].length;
    setCurrentSyllable(syllables[index][nextIndex]);
  };

  return (
    <div className="syllable-button-container">
      <button onClick={handleClick}>
        {currentSyllable}
      </button>
      <button onClick={() => onSpeak(currentSyllable)}>
        🎤
      </button>
    </div>
  );
}

export default SyllableButton;
