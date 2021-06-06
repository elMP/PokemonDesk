export interface IPokemon {
  total: number;
  pokemons: PokemonsRequest[];
}

const pokemonsData = {
  name_clean: 'ivysaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 60,
    attack: 62,
    defense: 63,
    'special-attack': 80,
    'special-defense': 80,
    speed: 60,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
  name: 'ivysaur',
  base_experience: 142,
  height: 10,
  id: 2,
  is_default: true,
  order: 2,
  weight: 130,
};

export type PokemonsRequest = typeof pokemonsData;
export type ITypesRequest = string[];
