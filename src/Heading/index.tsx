import React from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  size: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  let text;
  if (size === 'h1') text = <h1 className={s.h1}>{children}</h1>;
  else if (size === 'h2') text = <h2 className={s.h2}>{children}</h2>;
  else if (size === 'h3') text = <h3 className={s.h3}>{children}</h3>;
  else if (size === 'h4') text = <h4 className={s.h4}>{children}</h4>;
  else if (size === 'h5') text = <h5 className={s.h5}>{children}</h5>;
  else if (size === 'h6') text = <h6 className={s.h6}>{children}</h6>;
  else text = <p className={s.paragraph}>{children}</p>;

  return text;
};

export default Heading;
