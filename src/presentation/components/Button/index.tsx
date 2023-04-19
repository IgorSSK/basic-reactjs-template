import React from 'react';
import { ButtonDefault } from './styles';

type ButtonProps = {
  onClick?(): void;
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ onClick, title, ...props }) => {
  return (
    <ButtonDefault onClick={onClick} {...props}>
      {title}
    </ButtonDefault>
  );
};

export default Button;
