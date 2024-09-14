import React, { useState } from 'react';

const syllables = [
  ["M", "B", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z", "SCH", "ST", "SP"],
  ["AU", "A", "E", "I", "O", "U", "EI", "IE", "AU", "EU"],
  ["S", "B", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z", "CH", "SCH", "ST"],
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
