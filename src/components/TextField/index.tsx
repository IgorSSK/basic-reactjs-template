import React, { useEffect, useRef } from 'react';

import { InputField } from './styles';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';
import InputAdornment from '@material-ui/core/InputAdornment';

interface ITextFieldMaskProps {
  mask?: string | Array<string | RegExp>;
  alwaysShowMask?: boolean;
}

interface ITextFieldProps extends ITextFieldMaskProps {
  name: string;
  placeholder: string;
  startAdornment?: string | JSX.Element;
  endAdornmnet?: string | JSX.Element;
  label?: string;
}

const TextField: React.FC<ITextFieldProps> = ({
  name = '',
  mask,
  alwaysShowMask,
  startAdornment,
  endAdornmnet,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue = '', registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <InputMask mask={mask ? mask : ''} alwaysShowMask={alwaysShowMask} onFocus={clearError}>
      {() => (
        <InputField
          id={fieldName}
          inputRef={inputRef}
          error={!!error}
          helperText={error}
          defaultValue={defaultValue}
          variant="outlined"
          InputProps={{
            startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
            endAdornment: endAdornmnet && <InputAdornment position="end">{endAdornmnet}</InputAdornment>
          }}
          {...props}
        />
      )}
    </InputMask>
  );
};

export default TextField;
