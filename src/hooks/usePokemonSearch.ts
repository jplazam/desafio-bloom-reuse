import { useState } from 'react';
import { fetchPokemon } from '../services/api';

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

const usePokemonSearch = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await fetchPokemon(query);
      const formattedData = {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type: any) => type.type.name),
      };
      setPokemonData([formattedData]);
    } catch (error) {
      alert('Pokémon no encontrado');
    }
  };

  return { pokemonData, handleSearch };
};

export default usePokemonSearch;
