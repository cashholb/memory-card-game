import { useState, useEffect } from "react";
import './pokemon-page.css';
import Card from "../components/card";
import usePokemonData from "./usePokemonData";
import shuffleArray from "../utils/shuffleArray";
import EndGameModal from "../components/EndGameModal";
import { MotionConfig } from "framer-motion";
const NUMBER_OF_CARDS = 9;

const PokemonPage = ({ onBackHome, highScore, checkIncrementHighScore, isHard=false}) => {
    const { pokemonData, setPokemonData, isLoading } = usePokemonData(0);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);


    let currentScore = clickedPokemon.length;
  
    const checkPokemonClick = (pokemonClicked) => {
      let currPokemonList = [...clickedPokemon];
      if (currPokemonList.includes(pokemonClicked)) {
        setModalOpen(true);
      } else {
        const newPokemonData = shuffleArray([...pokemonData]);
        setPokemonData(newPokemonData);
        setClickedPokemon(currPokemonList.concat(pokemonClicked));

        checkIncrementHighScore(currentScore + 1);
        
      }
    };

    return (
      <div className="pokemon-page page">

        {modalOpen && 
          <EndGameModal 
            modalOpen={modalOpen} 
            handleClose={close} 
            hasWon={currentScore == NUMBER_OF_CARDS} 
            score={currentScore} 
            onBackHome={onBackHome}>
          </EndGameModal>
        }
        
        <h1>{isHard ? 'Hard' : 'Normal'} Mode</h1>
        <div>
          <p className="score">High Score: {highScore}</p>
          <p className="score">Current Score: {currentScore}</p>
        </div>
  
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