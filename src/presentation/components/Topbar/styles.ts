import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';
import fn from '@presentation/styles/utils/converters';

export const TopbarContainer = styled(AppBar)`
  height: 66px;
  background: ${({ theme }) => theme.colors.secondaryBackground} !important;
  border-bottom: 1px solid ${({ theme }) => fn.hexToRGB(theme.colors.primaryLight, '0.3')};

  & button {
    margin: 0 0.5rem;
  }
`;
