import React from 'react';

import { Container, Button, Title } from './styles';

interface Props {
  onClick(): void;
}

const HelloWorld: React.FC<Props> = ({ onClick, children }) => {
  console.log(children);

  return (
    <Container>
      <Title>Hello DEV!</Title>
      <Button onClick={onClick}>Switch Theme</Button>
    </Container>
  );
};

export default HelloWorld;
