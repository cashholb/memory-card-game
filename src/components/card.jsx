import React, { useState, useEffect } from 'react';
import './card.css';

function Card({ name, imgSrc, altText, checkPokemonClick, isHardMode = true }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Run the animation when the component mounts (first loads)
    setIsFlipped(true);

    // Optionally, you can set a timeout to flip the card back after a certain duration
    setTimeout(() => {
      setIsFlipped(false);
    }, 500); // Adjust the duration as needed
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    checkPokemonClick(name);
  };

  return (
    <div className={'card'} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imgSrc} alt={altText} />
          <h2>{name}</h2>
        </div>
        <div className="card-back">
          {/* Back content, if needed */}
        </div>
      </div>
    </div>
  );
}

export default Card;
