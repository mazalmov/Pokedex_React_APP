import React from 'react';
import { useLocation } from 'react-router-dom';
import PokemonMap from '../components/PokemonMap/PokemonMap';
import Header from '../components/Header/Header';
import generateRandomLocation from './const';
import { MapPageTitle } from './styles';


const MapPage: React.FC = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const pokemonLocation = generateRandomLocation();
  const displayPokemonName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!pokemonLocation) {
    return <div>Error: Location data is missing.</div>;
  }
  return (
    <div>
      <Header />
      <MapPageTitle> <h2> Help {displayPokemonName} find the way to the office  </h2></MapPageTitle>

      <PokemonMap name={displayPokemonName} location={pokemonLocation} />


    </div>
  );
};

export default MapPage;