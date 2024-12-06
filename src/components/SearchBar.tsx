import React, { useState, useEffect } from 'react';
import { fetchPokemonSuggestions } from '../services/api';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim()) {
        const results = await fetchPokemonSuggestions(query);
        setSuggestions(results.map((pokemon: any) => pokemon.name).slice(0, 5));
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.toLowerCase());
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="absolute bg-white border border-gray-300 rounded-md w-full mt-1 z-10">
          {suggestions.map((name, idx) => (
            <div
              key={idx}
              onClick={() => {
                setQuery(name);
                setSuggestions([]);
              }}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;