import React from 'react';
import InputComponent, { InputProps } from './Input';
import apply, { InputControlProps, InputMaskProps } from './InputMiddlewares';

type MaskProps = {
  mask?: InputMaskProps;
};

const Input: React.FC<InputProps & MaskProps & InputControlProps> = ({
  mask,
  control,
  ...props
}) => {
  return apply(InputComponent, control, mask)(props);
};
export default Input;
