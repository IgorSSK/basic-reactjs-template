import React from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Components from '../Components';

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
      <Components />
    </Container>
  );
};

export default HelloWorld;
