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
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`${POKE_API_URL}/pokemon?limit=1000`);
      const data = await response.json();
      const pokemons = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        image: `${IMAGE_API_URL}${index + 1}.png`,
      }));
      setAllPokemons(pokemons);
      setDisplayedPokemons(pokemons.slice(0, limit));
    };
    fetchPokemons();
  }, []);

  const handleLoadMore = () => {
    const newLimit = limit + 20;
    setLimit(newLimit);
    setDisplayedPokemons(allPokemons.slice(0, newLimit));
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setDisplayedPokemons(allPokemons.slice(0, limit));
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setDisplayedPokemons(filteredPokemons);
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
