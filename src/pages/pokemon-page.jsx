import { useState, useEffect } from "react";
import './pokemon-page.css';
import Card from "../components/card";
import usePokemonData from "./usePokemonData";
import shuffleArray from "../utils/shuffleArray";

const NUMBER_OF_CARDS = 9;

const PokemonPage = ({ onBackHome, isHard=false}) => {
    const { pokemonData, setPokemonData, isLoading } = usePokemonData(0);
    const [clickedPokemon, setClickedPokemon] = useState([]);
  
    const checkPokemonClick = (pokemonClicked) => {
      let currPokemonList = [...clickedPokemon];
      if (currPokemonList.includes(pokemonClicked)) {
        onBackHome();
      } else {
        // Shuffle the array and update the state with the new order
        const newPokemonData = shuffleArray([...pokemonData]);
        setPokemonData(newPokemonData);
        setClickedPokemon(currPokemonList.concat(pokemonClicked));
      }
    };
  
    return (
      <div className="pokemon-page page">
        <h1>This is the Pokemon page</h1>
        <p className="score">Score: {clickedPokemon.length}</p>
  
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        )}
  
        <div className="pokemon-list">
            {pokemonData.map((pokemon) => {
              
              
              return (
                <Card
                key={pokemon.id}
                name={pokemon.name}
                imgSrc={pokemon.imgSrc}
                altText={pokemon.altText}
                checkPokemonClick={checkPokemonClick}
                isHard={isHard}
              />
              )
            })}
          </div>
        <button onClick={onBackHome}>Back To Home</button>
      </div>
    );
  };
  

export default PokemonPage;