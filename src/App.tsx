import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { fetchPokemon } from './services/api';

const App: React.FC = () => {
  interface Pokemon {
    name: string;
    image: string;
    types: string[];
  }

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

  return (
    <div
      className="min-h-screen w-full bg-custom-size bg-center flex flex-col items-center justify-start pt-10"
      style={{
        backgroundImage: "url('https://www.pngarts.com/files/3/Pokemon-Logo-Transparent-Image.png')",
      }}
    >
      <div className="bg-white/90 p-8 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold my-4 text-black">Pokémon Search</h1>
        <SearchBar onSearch={handleSearch} />
        <PokemonList pokemons={pokemonData} />
      </div>
    </div>
  );
};

export default App;