import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import React from 'react';
import { IconButtonContainer } from './styles';

type IconButtonProps = MuiIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({ ...props }) => <IconButtonContainer {...props} />;

export default IconButton;
