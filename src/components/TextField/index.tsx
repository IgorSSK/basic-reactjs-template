import React, { useEffect, useRef, InputHTMLAttributes, RefObject } from 'react';

import { Adornment, InputField, Label, SpanError, Wrapper } from './styles';
import { useField } from '@unform/core';
//import { useMask } from '../../hooks/useMask';
//import InputMask, { Props as InputMaskProps } from 'react-input-mask';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  //Omit<InputMaskProps, 'mask'> {
  name: string;
  label?: string;
  value?: string;
  variant: string;
  startAdornment?: string | JSX.Element;
  endAdornment?: string | JSX.Element;
  mask?: string | Array<string | RegExp>;
}

const TextField: React.FC<ITextFieldProps> = ({
  name,
  label,
  placeholder,
  value,
  //mask,
  //alwaysShowMask,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref: RefObject<HTMLInputElement>) => ref.current?.value,
      setValue: (ref: RefObject<HTMLInputElement>, value) => {
        if (ref.current) ref.current.value = value ?? '';
      },
      clearValue: (ref: RefObject<HTMLInputElement>) => {
        if (ref.current) ref.current.value = '';
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Wrapper ref={wrapperRef} error={!!error}>
        {startAdornment && <Adornment>{startAdornment}</Adornment>}
        <InputField
          id={fieldName}
          ref={inputRef}
          placeholder={placeholder || ' '}
          defaultValue={value || defaultValue}
          {...rest}
        />
        {endAdornment && <Adornment>{endAdornment}</Adornment>}
        <Label htmlFor={fieldName}>{label}</Label>
      </Wrapper>
      {error && <SpanError>{error}</SpanError>}
    </>
  );
};

export default TextField;
