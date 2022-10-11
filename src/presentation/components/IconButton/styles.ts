import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import styled from 'styled-components';

type IconButtonContainer = {
  //   color: any;
} & IconButtonProps;
export const IconButtonContainer = styled(IconButton)<IconButtonContainer>`
  color: ${({ color, theme }) => color ?? theme.colors.text} !important;
`;
