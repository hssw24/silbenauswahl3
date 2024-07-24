import React, { useState } from 'react';

const syllables = [
  ["BA", "DO", "FU", "KA", "ME", "NI", "SO", "TE", "ZU", "XI"],
  ["BO", "DA", "FI", "KU", "MA", "NO", "SU", "TA", "ZA", "XY"],
  ["BI", "DE", "FO", "KI", "MO", "NE", "SI", "TO", "ZE", "XU"]
];

function SyllableButton({ index }) {
  const [currentSyllable, setCurrentSyllable] = useState(syllables[index][0]);

  const handleClick = () => {
    const nextIndex = (syllables[index].indexOf(currentSyllable) + 1) % syllables[index].length;
    setCurrentSyllable(syllables[index][nextIndex]);
  };

  return (
    <button onClick={handleClick}>
      {currentSyllable}
    </button>
  );
}

export default SyllableButton;
