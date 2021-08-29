import React from 'react';
import { IconButtonContainer } from './styles';

interface Props {
  icon: string;
}

const IconButton: React.FC<Props> = ({ icon }) => {
  return (
    <IconButtonContainer>
      <i>{icon}</i>
    </IconButtonContainer>
  );
};

export default IconButton;
