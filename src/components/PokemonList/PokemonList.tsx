
import React from 'react';
import { ListContainer } from './styles';
import './PokemonList.css';
import PokemonComponent from '../PokemonComponent/PokemonComponent';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}
const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {

  return (
    <ListContainer>

      {pokemons.map((pokemon) => (
        <PokemonComponent key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} />
      ))}

    </ListContainer>

  );
};

export default PokemonList;
