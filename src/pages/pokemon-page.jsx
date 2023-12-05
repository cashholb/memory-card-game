import Card from "../components/card";
import { useState, useEffect } from "react";
import './pokemon-page.css'; // Import your CSS file for styling
import pokemonList from "./pokemonList";
import shuffleArray from "../utils/shuffleArray";

const NUMBER_OF_CARDS = 9;

const PokemonPage = ({ onBackHome }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [clickedPokemon, setClickedPokemon] = useState([]);
  
    useEffect(() => {
      
      let randomPokemon = new Set();
      while(randomPokemon.size < NUMBER_OF_CARDS) {
        randomPokemon.add(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
      }

      const fetchPokemonData = async () => {
        const fetchDataPromises = Array.from(randomPokemon).map(async (name) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            if (!response.ok) {
                throw new Error(`Failed to fetch Pokemon data: ${response.status}`);
            }

            const data = await response.json();
            return {
                id: data.id,
                name: data.name,
                imgSrc: data.sprites.front_default,
                altText: `${data.name} sprite`
            }
        });

        try {
          const fetchedPokemon = await Promise.all(fetchDataPromises);
          setPokemonData(fetchedPokemon);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error.message);
        }finally{
            setIsLoading(false);
        }
      };
      fetchPokemonData();

    }, []);

    const checkPokemonClick = (pokemonClicked) => {
      let currPokemonList = [...clickedPokemon];
      if (currPokemonList.includes(pokemonClicked)) {
        onBackHome();
      }
      setPokemonData(shuffleArray(pokemonData));
      setClickedPokemon(currPokemonList.concat(pokemonClicked));
    }
  
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
            {!isLoading && pokemonData.map((pokemon) => (
                <Card 
                    key={pokemon.id} 
                    name={pokemon.name} 
                    imgSrc={pokemon.imgSrc} 
                    altText={pokemon.altText}
                    checkPokemonClick={checkPokemonClick}
                />
            ))}
        </div>
        <button onClick={onBackHome}>Back To Home</button>
      </div>
    );
  };
  

export default PokemonPage;