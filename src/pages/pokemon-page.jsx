import { useState, useEffect } from "react";
import './pokemon-page.css';
import PokemonCardList from "./PokemonCardList";
import usePokemonData from "./usePokemonData";
import shuffleArray from "../utils/shuffleArray";


const NUMBER_OF_CARDS = 9;

const PokemonPage = ({ onBackHome}) => {
    const { pokemonData, setPokemonData, isLoading, key } = usePokemonData(0);
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
  
        <PokemonCardList pokemonToDisplay={pokemonData} checkPokemonClick={checkPokemonClick}></PokemonCardList>
        <button onClick={onBackHome}>Back To Home</button>
      </div>
    );
  };
  

export default PokemonPage;