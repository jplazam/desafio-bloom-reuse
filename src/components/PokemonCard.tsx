import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Tipos: {types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;