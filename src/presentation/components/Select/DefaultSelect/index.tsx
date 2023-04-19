import React from 'react';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export type DefaultSelectProps = {
  name: string;
  label?: string;
  options: SelectOption[];
  value?: any;
  maxWidth?: number;
  disabled?: boolean;
  fieldError?: { message?: string };
  onSelectChange?: (value: any) => void;
  renderOption?: (option: any, props: any) => React.ReactNode;
};

export type SelectOption = {
  id: string | number;
  label: string | number;
  value: any;
};

const DefaultSelect: React.FC<DefaultSelectProps> = ({
  name,
  value,
  label,
  options,
  onSelectChange,
  fieldError,
  renderOption
}) => (
  <FormControl sx={{ m: 1, minWidth: 120 }} error={!!fieldError}>
    <InputLabel id={`${name}-id`}>{label}</InputLabel>
    <MuiSelect
      labelId={`${name}-id`}
      id={`${name}-id`}
      value={value}
      label={label}
      onChange={e => onSelectChange?.(e.target.value)}
      // renderValue={value => `⚠️  - ${value}`}
    >
      {options?.map(option => (
        <MenuItem key={option.id} value={option.value}>
          {renderOption ? renderOption(option, null) : option.label}
        </MenuItem>
      ))}
    </MuiSelect>
    <FormHelperText>{fieldError?.message}</FormHelperText>
  </FormControl>
);

export default DefaultSelect;
