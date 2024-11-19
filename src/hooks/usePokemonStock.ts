import { useState, useEffect } from 'react';

// Defining the structure of a Pokemon object
interface Pokemon {
  name: string;
  id: number;
  image: string;
}

const usePokemonStock = () => {
  const [pokemonStock, setPokemonStock] = useState<Pokemon[]>([]);  // Full list of all pokemons
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);  // List of displayed pokemons
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [nextUrl, setNextUrl] = useState<string | null>('https://pokeapi.co/api/v2/pokemon?limit=2000');  // URL to fetch the first batch of pokemons
  const [offset, setOffset] = useState<number>(0);  // Position to load the next batch of pokemons

  // Function to fetch pokemons from the API
  const fetchPokemons = async () => {
    if (!nextUrl) return;

    setLoading(true);  // Start loading
    const response = await fetch(nextUrl);
    const data = await response.json();

    const pokemonData: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonDetails = await fetch(pokemon.url);
        const pokemonDetailsData = await pokemonDetails.json();
        return {
          name: pokemonDetailsData.name,
          id: pokemonDetailsData.id,
          image: pokemonDetailsData.sprites.front_default,
        };
      })
    );

    setPokemonStock(pokemonData);  // Save all the pokemons to the state
    setDisplayedPokemons(pokemonData.slice(0, 20));  // Display only the first 20 pokemons
    setNextUrl(data.next);  // Update the URL if there are more pages
    setLoading(false);  // Stop loading
  };

  // Function to load 20 more pokemons when "Load More" button is clicked
  const loadMorePokemons = () => {
    const nextPokemons = pokemonStock.slice(offset, offset + 20);  // Get the next 20 pokemons
    setDisplayedPokemons((prev) => [...prev, ...nextPokemons]);  // Add them to the displayed list
    setOffset((prev) => prev + 20);  // Update the offset for the next batch
  };

  useEffect(() => {
    fetchPokemons();  // Fetch pokemons when the component is first mounted
  }, []);

  return { displayedPokemons, loading, loadMorePokemons };  // Return the necessary values to the component
};

export { usePokemonStock };  // Export the custom hook
