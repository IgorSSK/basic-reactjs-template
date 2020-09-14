import React from 'react';
import { toast } from 'react-toastify';
import Button from '../Button';

import { Container, Title } from './styles';

interface Props {
  onClick(): void;
}

const HelloWorld: React.FC<Props> = ({ onClick, children }) => {
  toast.info('easy');

  return (
    <Container>
      <Title>{children}</Title>
      <Button title="Switch Theme" onClick={onClick} />
    </Container>
  );
};

export default HelloWorld;
