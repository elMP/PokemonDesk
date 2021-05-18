import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
  isMaxWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color, size, isMaxWidth }) => {
  let buttonClass = s.root;
  if (color === 'yellow') buttonClass = cn(s.root, s.yellow);
  else if (color === 'green') buttonClass = cn(s.root, s.green);
  else buttonClass = s.root;

  if (size === 'small') buttonClass += cn(buttonClass, s.small);
  else if (size === 'big') buttonClass += cn(buttonClass, s.big);

  if (isMaxWidth) buttonClass += cn(buttonClass, s.max);

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
