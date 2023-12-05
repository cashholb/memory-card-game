import { useEffect, useState } from 'react';
import Card from "../components/card";

const PokemonCardList = ({ pokemonToDisplay, checkPokemonClick }) => {

  return (
    <div className="pokemon-list">
      {pokemonToDisplay.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          imgSrc={pokemon.imgSrc}
          altText={pokemon.altText}
          checkPokemonClick={checkPokemonClick}
        />
      ))}
    </div>
  );
};

export default PokemonCardList;
