import React, { useState } from 'react';

const syllables = [
  ["BA", "Ba", "FU", "KA", "ME", "Me", "NI", "Ni", "ZU", "XI"],
  ["BO", "DA", "FI", "KU", "MA", "NO", "SU", "TA", "ZA", "XY"],
  ["BIN", "DER", "FON", "KIM", "MON", "NES", "SIM", "TOR", "ZEN", "NUR"]
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
