import React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import { InputProps } from '@presentation/components/Input/Input';
import Input from '@presentation/components/Input';
import { SelectOption } from '../DefaultSelect';

export type AutocompleteProps = {
  name: string;
  options: SelectOption[];
  label?: string;
  getOptionLabel?: (option: any) => string;
  onSelectChange?: (value: any) => void;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  value?: any;
  maxWidth?: number;
  control?: any;
  onBlur?: () => void;
  ref?: any;
  fieldError?: { message?: string };
  renderOption?: (option: any, props: any) => React.ReactNode;
} & InputProps;

const Autocomplete: React.FC<AutocompleteProps> = ({
  name,
  label,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  onSelectChange,
  size,
  maxWidth,
  disabled,
  control,
  value,
  onBlur,
  ref,
  fieldError,
  renderOption,
  ...props
}) => (
  <MuiAutocomplete
    ref={ref}
    onBlur={onBlur}
    options={options}
    getOptionLabel={getOptionLabel}
    isOptionEqualToValue={isOptionEqualToValue}
    autoSelect
    disabled={disabled}
    sx={{ maxWidth }}
    onChange={(_, { id, value }) => onSelectChange?.({ id, value })}
    value={value}
    loading={true}
    renderOption={(props, option, state) => renderOption?.(option, { ...props, ...state })}
    renderInput={params => (
      <Input
        //   {...props}
        {...params}
        //   size={size}
        autoComplete="off"
        name={name}
        label={label}
        error={!!fieldError}
        helperText={fieldError?.message}
      />
    )}
  />
);

export default Autocomplete;
