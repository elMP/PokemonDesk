import React from 'react';
import { getOnePokemonData } from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data } = getOnePokemonData<PokemonsRequest>('getPokemonById');

  return <div>This is pokemon {data?.name};</div>;
};

export default Pokemon;
