import React from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import usePokemonSearch from './hooks/usePokemonSearch';

const App: React.FC = () => {
  const { pokemonData, handleSearch } = usePokemonSearch();

  return (
    <div
      className="min-h-screen w-full bg-custom-size bg-center flex flex-col items-center justify-start pt-10"
      style={{
        backgroundImage: "url('https://www.pngarts.com/files/3/Pokemon-Logo-Transparent-Image.png')",
      }}
    >
      <div className="bg-white/90 p-8 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold my-4 text-black">Búsqueda Pokémon</h1>
        <SearchBar onSearch={handleSearch} />
        <PokemonList pokemons={pokemonData} />
      </div>
    </div>
  );
};

export default App;