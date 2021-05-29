import React, { useState } from 'react';
import s from './PokedexPage.module.scss';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../Heading';
import useData from '../../hook/getData';

import { IPokemon, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
//   total: string;
//   pokemons: Array<IPokemon>;
// }

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debounceValue = useDebounce(searchValue, 1000);
  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);

  const { data, isLoading, isError } = useData<IPokemon>('getPokemons', query, [debounceValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
      <Layout className={s.contentWrap}>
        <Heading size="h4"> {!isLoading && data && data.total} Pokemons for you to choose your favorite</Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        {/* <div>
          {data.pokemons.map(item =>
            <div>{item.name}</div>)}
        </div> */}
        <div>
          {!isLoading &&
            data &&
            data.pokemons.map((item: PokemonsRequest) => <PokemonCard key={item.key} pokemon={item} />)}
          ;
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
