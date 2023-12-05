import React, { useState, useEffect } from 'react';
import './card.css';

function Card({ name, imgSrc, altText, checkPokemonClick, isHardMode = true }) {

  const handleCardClick = () => {
    checkPokemonClick(name);
  };

  return (
    <div className={`card-container`}>
      <div className='card' onClick={handleCardClick}>
        <div className='card-front'>
          <img src={imgSrc} alt={altText} />
          <h2>{name}</h2>
        </div>
        <div className='card-back'>

        </div>
      </div>
    </div>
  );
}

export default Card;
