import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POKE_API_URL } from '../../services/apiService';
import PokemonComponent from '../PokemonComponent/PokemonComponent'
import "./PokemonCard.css";
import heartOutline from '../../assets/nofavorite.png'; // icon-Heart (empty)
import heartFilled from '../../assets/favorit.png'; // icon-Heart filled (red)
import { PokemonTypeColor } from '../PokemonTypeColor';
import Location_Icon from '../../assets/location.png';

interface Stat {
  base_stat: number;
  stat: { name: string };
}

interface Ability {
  ability: { name: string };
}

interface Type {
  type: { name: string };

}

interface Pokemon {
  id: number;
  name: string;
  image: string;
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
  description: string;
}

const PokemonCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);

        const pokemonResponse = await fetch(`${POKE_API_URL}/pokemon/${id}`);
        const pokemonData = await pokemonResponse.json();

        const speciesResponse = await fetch(`${POKE_API_URL}/pokemon-species/${id}`);
        const speciesData = await speciesResponse.json();

        const descriptionEntry = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );

        const description = descriptionEntry
          ? descriptionEntry.flavor_text.replace(/\n|\f/g, " ")
          : "No description available.";

        setPokemon({
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          stats: pokemonData.stats,
          abilities: pokemonData.abilities,
          types: pokemonData.types,
          description,

        });

        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.some((fav: any) => fav.id === pokemonData.id));

      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPokemonData();
    }
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav: any) => fav.id !== pokemon?.id);
    } else {
      updatedFavorites = [...favorites, { id: pokemon?.id, name: pokemon?.name, image: pokemon?.image }];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Error loading Pokémon details.</div>;
  }

  const navigateToLocation = () => {
    if (pokemon) {
      navigate('/map', {
        state: {
          name: pokemon.name,
        },
      });

    }
  };

  return (
    <div className="pokemon-card-container">
      {/* Left side */}
      <div className="pokemon-card-left">

        <PokemonComponent id={pokemon.id} name={pokemon.name} image={pokemon.image} />

        <div className="pokemon-types">
          {pokemon.types.map((types, index) => (
            <span
              key={index}
              className="types-box"
              style={{ backgroundColor: PokemonTypeColor[types.type.name as keyof typeof PokemonTypeColor] }}
            >
              {types.type.name}
            </span>
          ))}
        </div>

      </div>
      <div className="pokemon-card-right">
        <button
          className="favorite-button"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          <img
            src={isFavorite ? heartFilled : heartOutline}
            alt={isFavorite ? "Heart Filled" : "Heart Outline"}
            className="heart-icon"
          />
        </button>

        <h3>Description</h3>
        <p>{pokemon.description}</p>

        <h3>Stats:</h3>
        <div className="stats-table">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="stat-row">
              <span className="stat-name">{stat.stat.name}</span>
              <span className="stat-value">{stat.base_stat}</span>
            </div>
          ))}
        </div>
        <div className="icon-button-container" >
          <button className="location-button" onClick={navigateToLocation}>
            <img
              src={Location_Icon}
              alt={'location-icon'}
              className="location_icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;


