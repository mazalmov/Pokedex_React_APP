import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Bar from "../components/Bar/Bar";
import PokemonList from "../components/PokemonList/PokemonList";
import LoadMoreButton from "../components/LoadMoreButtom﻿﻿/LoadMoreButton";
import { POKE_API_URL, IMAGE_API_URL } from "../services/apiService";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]); // Store all pokemons here
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]); // Pokemons currently displayed
  const [limit, setLimit] = useState<number>(20); // Limit for how many pokemons to show at once

  // Fetch all pokemons once when component mounts
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`${POKE_API_URL}/pokemon?limit=1000`); // Get all pokemons
      const data = await response.json();
      const pokemons = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        image: `${IMAGE_API_URL}${index + 1}.png`,
      }));
      setAllPokemons(pokemons); // Save all pokemons in state
      setDisplayedPokemons(pokemons.slice(0, limit)); // Display the first "limit" pokemons
    };
    fetchPokemons();
  }, []); // Only run once on component mount

  // Load more functionality (add more pokemons to display)
  const handleLoadMore = () => {
    const newLimit = limit + 20; // Increase limit by 20
    setLimit(newLimit); // Update limit
    setDisplayedPokemons(allPokemons.slice(0, newLimit)); // Display more pokemons by adjusting the slice
  };
  // Search function
  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setDisplayedPokemons(allPokemons.slice(0, limit)); // If search is empty, reset displayed pokemons
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setDisplayedPokemons(filteredPokemons); // Update displayed pokemons with search results
    }
  };
  return (
    <div>
      <Header />
      <Bar onSearchClick={handleSearch} allPokemons={allPokemons} />
      <PokemonList pokemons={displayedPokemons} />
      <LoadMoreButton onClick={handleLoadMore} loading={false} />
    </div>
  );
};

export default HomePage;
