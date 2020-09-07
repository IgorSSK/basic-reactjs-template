import React from 'react';

import { Container } from './styles';

interface Props {
  onClick(): void;
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <Container>
      Hello World!
      <button onClick={onClick}>ClickMe</button>
    </Container>
  );
};

export default Button;
