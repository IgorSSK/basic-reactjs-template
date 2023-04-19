import React from 'react';
import { Control, useController } from 'react-hook-form';
import Autocomplete, { AutocompleteProps } from './Autocomplete';
import DefaultSelect, { DefaultSelectProps } from './DefaultSelect';

type SelectProps = {
  autocomplete?: boolean;
  control?: Control;
} & AutocompleteProps &
  DefaultSelectProps;

const Select: React.FC<SelectProps> = ({
  autocomplete,
  control,
  name,
  label,
  options,
  renderOption,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control });

  const { getOptionLabel, isOptionEqualToValue, maxWidth, disabled } = props;

  const handleSelect = (value: any) => {
    field.onChange(value);
  };

  const defaultProps = {
    ...field,
    maxWidth,
    disabled,
    name,
    label,
    options,
    onSelectChange: handleSelect,
    renderOption,
    fieldError: fieldState.error && { message: fieldState.error.message }
  };

  const autocompleteProps = {
    ...defaultProps,
    getOptionLabel,
    isOptionEqualToValue
  };

  return !autocomplete ? (
    <DefaultSelect {...defaultProps} />
  ) : (
    <Autocomplete variant="outlined" {...autocompleteProps} />
  );
};

export default Select;
