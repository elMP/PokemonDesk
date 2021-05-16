import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color }) => {
  let buttonClass;
  if (color) buttonClass = cn(s.root, s.yellow);
  else buttonClass = s.root;

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
