import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import Pikachu from './assets/Pikachu.png';
import SmallPokeBallPng from './assets/PokeBall1.png';
import BigPokeBallPng from './assets/PokeBall2.png';
import Cloud1 from './assets/Cloud1.png';
import Cloud2 from './assets/Cloud2.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenY * 0.1}px, ${screenX * 0.1}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenY * 0.1}px, ${screenX * 0.1}px)`,
        }}>
        <img src={Cloud1} alt="Cloud" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenY * 0.2}px, ${screenX * 0.2}px)`,
        }}>
        <img src={Cloud2} alt="Cloud" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}>
        <img src={BigPokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenY * 0.02}px, ${screenX * 0.02}px)`,
        }}>
        <img src={Pikachu} alt="Pikachu" />
      </div>
    </div>
  );
};

export default Parallax;
