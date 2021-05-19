/* eslint-disable */
import React from 'react';

import s from './Home.module.scss';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../Heading';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite Pokemon
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
