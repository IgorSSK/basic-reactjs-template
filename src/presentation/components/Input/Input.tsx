import React from 'react';
import { TextFieldProps, InputAdornment } from '@mui/material';
import { InputField } from './styles';

export type InputProps = {
  name: string;
  maxWidth?: string | number;
  startAdornment?: any;
  endAdornmnet?: any;
} & TextFieldProps;

const InputComponent: React.FC<InputProps> = ({
  ref,
  maxWidth,
  startAdornment,
  endAdornmnet,
  InputProps,
  ...props
}) => {
  const inputProps = {
    startAdornment: startAdornment && (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ),
    endAdornment: endAdornmnet && <InputAdornment position="end">{endAdornmnet}</InputAdornment>,
    ...InputProps
  };

  return (
    <InputField
      variant="outlined"
      InputProps={inputProps}
      inputRef={ref}
      sx={{ maxWidth }}
      {...props}
    />
  );
};

export default InputComponent;
