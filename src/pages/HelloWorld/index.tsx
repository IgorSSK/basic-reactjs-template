import React from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Table from '../../components/Table';

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
      <Table
        columns={[{ field: 'name', title: 'Name' }]}
        data={[{ name: 'Igor' }]}
      />
    </Container>
  );
};

export default HelloWorld;
