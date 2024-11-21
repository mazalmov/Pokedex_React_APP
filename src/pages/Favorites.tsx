import React from "react";
import Header from "../components/Header/Header";
import PokemonList from "../components/PokemonList/PokemonList";
import './pages.css';

const Favorites: React.FC = () => {
  const favoritePokemons = JSON.parse(localStorage.getItem("favorites") || "[]");

  // If there are no favorites, display a message
  if (favoritePokemons.length === 0) {
    return <><Header /> <div>No favorite Pokémon added yet.</div> </>;
  }

  return (
    <div>
      <Header />
      <h1>Your Favorite Pokémon :</h1>
      <div className="pokemon-list">
        <PokemonList pokemons={favoritePokemons} />

      </div>
    </div>
  );
};

export default Favorites;

