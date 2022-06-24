import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Formatter from '../../utils/formatters';
import Components from '../Components';

import { Container, Title } from './styles';

interface Props {
  onClick(): void;
}

const HelloWorld: React.FC<Props> = ({ onClick, children }) => {
  const [date] = useState(new Date());
  //setTimeout(() => setDate(new Date()), 1000);

  useEffect(() => {
    toast.info('easy');
  }, [toast]);

  return (
    <Container>
      <Title>{children}</Title>
      <span>{Formatter.datetime(date)}</span>
      <Button title="Switch Theme" onClick={onClick} />
      <Components />
    </Container>
  );
};

export default HelloWorld;
