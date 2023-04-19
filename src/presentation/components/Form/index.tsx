import React from 'react';
import { FormBox, FormContainer } from './styles';

type FormProps = {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> & { Box: React.FC<FormProps> } = ({ children, ...props }) => (
  <FormContainer {...props}>{children}</FormContainer>
);

const Box: React.FC<FormProps> = ({ children }) => <FormBox>{children}</FormBox>;

Form.Box = Box;

export default Form;
