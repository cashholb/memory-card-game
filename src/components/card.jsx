import React, { useState, useEffect } from 'react';
import './card.css';

function Card({ name, imgSrc, altText, checkPokemonClick, isHard = true }) {

  const handleCardClick = () => {
    checkPokemonClick(name);
  };
  
  if(!isHard) {
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
  } else {
    const decideDisplay = Math.random() < 0.5;
    return (
      <div className={`card-container`}>
        <div className='card' onClick={handleCardClick}>
          <div className='card-front'>
            <img src={imgSrc} alt={altText} style={{visibility: `${decideDisplay ? 'visible' : 'hidden'}`}}/>
            <h2 style={{visibility: `${decideDisplay ? 'hidden' : 'visible'}`}}>{name}</h2>
          </div>
          <div className='card-back'>
  
          </div>
        </div>
      </div>
    );
  }

  
}

export default Card;
