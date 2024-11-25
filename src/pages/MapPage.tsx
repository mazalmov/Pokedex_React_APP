import React from 'react';
import { useLocation } from 'react-router-dom';
import PokemonMap from '../components/PokemonMap/PokemonMap';
import Header from '../components/Header/Header';

const MapPage: React.FC = () => {
  const location = useLocation();
  const { name, location: pokemonLocation } = location.state || {};

  if (!pokemonLocation) {
    return <div>Error: Location data is missing.</div>;
  }
  return (
    <div>
      <Header />
      <h3>{name}</h3>
      <div>

        <p>Latitude: {pokemonLocation.lat}</p>
        <p>Longitude: {pokemonLocation.lng}</p>
        <PokemonMap name ={name} location={pokemonLocation} />

      </div>
    </div>
  );
};

export default MapPage;