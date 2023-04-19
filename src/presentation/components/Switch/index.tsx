import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { SwitchContainer, SwitchIconWrapper } from './styles';
import { Control, useController } from 'react-hook-form';

type SwitchProps = {
  name: string;
  label?: string;
  onClick?: () => void;
  icons?: React.ReactNode[];
  control?: Control;
} & MuiSwitchProps;

const Component: React.FC<SwitchProps> = ({ label, icons, onClick, name, control, ...props }) => {
  const _icons = icons
    ? {
        checkedIcon: <SwitchIconWrapper> {icons[0]}</SwitchIconWrapper>,
        icon: <SwitchIconWrapper>{icons[1]}</SwitchIconWrapper>
      }
    : {};
  return (
    <FormControlLabel
      control={<SwitchContainer onClick={onClick} {..._icons} {...props} />}
      label={label}
    />
  );
};

function apply<T = any>(Component: React.FC<T>, control?: Control): React.FC<T & { name: string }> {
  return props => {
    const { field, fieldState } = useController({ name: props.name, control });
    return (
      <Component
        {...props}
        {...field}
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    );
  };
}

const Switch: React.FC<SwitchProps> = ({ control, ...props }) =>
  control ? apply(Component, control)(props) : <Component {...props} />;

export default Switch;
