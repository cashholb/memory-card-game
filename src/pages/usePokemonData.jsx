import pokemonList from "./pokemonList";

import { useState, useEffect } from 'react';

const usePokemonData = (initialKey) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let randomPokemon = new Set();
      const NUMBER_OF_CARDS = 9;

      while (randomPokemon.size < NUMBER_OF_CARDS) {
        randomPokemon.add(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
      }

      const fetchDataPromises = Array.from(randomPokemon).map(async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch Pokemon data: ${response.status}`);
        }

        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          imgSrc: data.sprites.front_default,
          altText: `${data.name} sprite`,
        };
      });

      try {
        const fetchedPokemon = await Promise.all(fetchDataPromises);
        setPokemonData(fetchedPokemon);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  return { pokemonData, setPokemonData, isLoading };
};

export default usePokemonData;
