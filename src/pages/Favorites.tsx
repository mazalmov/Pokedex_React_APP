import React from "react";
import Header from "../components/Header/Header";
import PokemonList from "../components/PokemonList/PokemonList";

const Favorites: React.FC = () => {
  // Retrieve the list of favorite Pokémon from localStorage
  const favoritePokemons = JSON.parse(localStorage.getItem("favorites") || "[]");

  // If there are no favorites, display a message
  if (favoritePokemons.length === 0) {
    return <div>No favorite Pokémon added yet.</div>;
  }

  return (
    <div>
      <Header />

      {/* Page heading */}
      <h1>Your Favorite Pokémon :</h1>
      <div className="pokemon-list">
        {/* Display each favorite Pokémon */}
        <PokemonList pokemons={favoritePokemons} />

      </div>
    </div>
  );
};

export default Favorites;

