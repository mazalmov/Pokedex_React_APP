import React from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate
import './PokemonComponent.css'

interface PokemonHeaderProps {
  id: number;
  name: string;
  image: string;
}

const PokemonComponent: React.FC<PokemonHeaderProps> = ({ id, name, image }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="pokemon-conteiner" onClick={handleClick}>
      <div className="pokemon-id">#{id.toString().padStart(3, '0')}</div>
      <img src={image} alt={name} className="pokemon-image" />
      <div className="name-container">{name} </div>
    </div>
  );
};

export default PokemonComponent;
