import React, { useState, useEffect } from 'react';
import s from './PokedexPage.module.scss';
import Layout from '../../components/Layout';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';
import Heading from '../../Heading';
import req from '../../utils/request';

interface PokemonData {
  total: string;
  pokemons: Array<IPokemon>;
}

const usePokemons = () => {
  const [data, setData] = useState<PokemonData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }
  // let pokemonsData = pokemons.map((item) => {
  //   { name: item.name, item.img };
  // });
  // console.log(pokemonsData);
  return (
    <div className={s.root}>
      {/* <Header /> */}
      <Heading size="h4"> {data.total} Pokemons for you to choose your favorite</Heading>
      <Layout className={s.contentWrap}>
        {/* <div>
          {data.pokemons.map(item =>
            <div>{item.name}</div>)}
        </div> */}
        <div>
          {data.pokemons.map((item: IPokemon) => (
            <PokemonCard key={item.key} pokemon={item} />
          ))}
          ;
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
