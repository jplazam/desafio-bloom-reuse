import React from 'react';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: {
    name: string;
    image: string;
    types: string[];
  }[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokemonList;