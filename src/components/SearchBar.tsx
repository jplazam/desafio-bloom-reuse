import React, { useState } from 'react';
import usePokemonSuggestions from '../hooks/usePokemonSuggestions';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const suggestions = usePokemonSuggestions(query);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.toLowerCase());
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (name: string) => {
    setQuery(name);
  };

  const exactMatch = suggestions.includes(query);

  const filteredSuggestions = exactMatch ? [] : suggestions;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={query}
          onChange={handleQueryChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="absolute bg-white border border-gray-300 rounded-md w-full mt-1 z-10">
          {filteredSuggestions.map((name, idx) => (
            <div
              key={idx}
              onClick={() => handleSuggestionClick(name)}
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