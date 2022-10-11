import React from 'react';
import { TypographyProps } from '@mui/material';
import { TextContainer } from './styles';

type TextProps = {
  children: React.ReactNode;
} & TypographyProps;

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <TextContainer {...props}>{children}</TextContainer>
);

export default Text;
