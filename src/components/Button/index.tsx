import React, { ButtonHTMLAttributes } from 'react';
import { ButtonDefault } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?(): void;
  title?: string;
}

const Button: React.FC<Props> = ({ onClick, title, ...props }) => {
  return (
    <ButtonDefault onClick={onClick} {...props}>
      {title}
    </ButtonDefault>
  );
};

export default Button;
