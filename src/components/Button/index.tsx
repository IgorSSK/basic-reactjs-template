import React from 'react';

import { Container } from './styles';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

interface Props {
  onClick(): void;
}

const Button: React.FC<Props> = ({ onClick }) => {
  const { data, error, mutate } = useFetch(api, 'get', 'teste');

  return (
    <Container>
      Hello World!
      <button onClick={onClick}>ClickMe</button>
    </Container>
  );
};

export default Button;
