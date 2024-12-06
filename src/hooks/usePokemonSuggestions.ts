import { useState, useEffect } from 'react';
import { fetchPokemonSuggestions } from '../services/api';

const usePokemonSuggestions = (query: string) => {
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

  return suggestions;
};

export default usePokemonSuggestions;
