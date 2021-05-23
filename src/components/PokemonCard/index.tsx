import React from 'react';
import Heading from '../../Heading';

import s from './PokemonCard.module.scss';

export interface IPokemon {
  key: string;
  name: string;
  img: string;
  stats: {
    attack: number;
    defense: number;
  };
}

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="h4">{pokemon.name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt="Charmander" />
      </div>
    </div>
  );
};

export default PokemonCard;
