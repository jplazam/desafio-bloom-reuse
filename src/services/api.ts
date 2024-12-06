import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const fetchPokemon = async (name: string) => {
  try {
    const response = await api.get(`pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchPokemonSuggestions = async (query: string) => {
  try {
    const response = await api.get(`pokemon?limit=1000`);
    const results = response.data.results;
    return results.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    return [];
  }
};