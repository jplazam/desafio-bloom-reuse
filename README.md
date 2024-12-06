# Desafío Bloom Reuse

## Estructura del Proyecto:

```bash
/src
  /assets
    index.css
  /components
    SearchBar.tsx
    PokemonList.tsx
    PokemonCard.tsx
  /hooks
    usePokemonSearch.ts
    usePokemonSuggestions.ts
  /services
    api.ts
  App.tsx
  index.tsx
```

## Explicación de los Archivos:

* App.tsx: Componente principal de la aplicación. Contiene el estado global para almacenar los Pokémon encontrados y maneja la lógica de búsqueda.
* SearchBar.tsx: Componente que contiene la barra de búsqueda, y se encarga de mostrar las sugerencias basadas en lo que el usuario escribe.
* PokemonList.tsx: Componente que muestra la lista de Pokémon encontrados.
* PokemonCard.tsx: Componente que muestra la información del Pokémon.
* usePokemonSearch.ts: Hook personalizado para manejar la lógica de búsqueda de Pokémon y actualizar el estado con los resultados.
* usePokemonSuggestions.ts: Hook personalizado que maneja las sugerencias para el autocompletado de búsqueda.
* api.ts: Contiene las funciones para interactuar con la API de Pokémon.

## Comandos de Instalación y Ejecución del Proyecto:

```bash
npm install
```
```bash
npm run dev
```