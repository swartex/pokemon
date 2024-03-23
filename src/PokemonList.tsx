import React, { useState } from 'react';
import { useGetPokemonListQuery } from './services/pokemonApi';
import PokemonDetails from './PokemonDetails';
import { Pokemon } from './types';

const PokemonList: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const { data, error, isLoading } = useGetPokemonListQuery(limit);

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // console.log(data)
  return (
    <div>
      <h2>Pokemon List</h2>
      <button onClick={() => handleLimitChange(10)}>Show 10 Pokemon</button>
      <button onClick={() => handleLimitChange(30)}>Show 30 Pokemon</button>
      <ul>
      {data?.results?.map((pokemon: Pokemon) => (
          <li key={pokemon.name}>
            <PokemonDetails pokemonName={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
