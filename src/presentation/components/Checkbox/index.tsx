import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControl,
  FormGroup,
  FormLabel
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

type CheckboxGroupProps = {
  title?: string;
  row?: boolean;
  children: React.ReactNode;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, row, children }) => {
  return (
    <FormControl component="fieldset">
      {title && <FormLabel component="legend">{title}</FormLabel>}
      <FormGroup row={row}>{children}</FormGroup>
    </FormControl>
  );
};

type CheckboxProps = {
  name: string;
  label: string;
  onCheck?: () => void;
  control?: any;
};

const Checkbox: React.FC<CheckboxProps & MuiCheckboxProps> & {
  Group: React.FC<CheckboxGroupProps>;
} = ({ name, label, onCheck, control, ...props }) => {
  return !control ? (
    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
  ) : (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControlLabel
          control={
            <MuiCheckbox
              {...props}
              {...field}
              {...fieldState}
              onChange={e => {
                if (onCheck) onCheck();
                field.onChange(e.target.checked);
              }}
              checked={field.value}
            />
          }
          label={label}
        />
      )}
    />
  );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
