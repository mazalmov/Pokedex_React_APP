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

  if (!pokemonLocation) {
    return <div>Error: Location data is missing.</div>;
  }
  return (
    <div>
      <Header />
      <MapPageTitle> <h2> Help {name} find the way to the office  </h2></MapPageTitle>

      <PokemonMap name={name} location={pokemonLocation} />


    </div>
  );
};

export default MapPage;