import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';

export const TopbarContainer = styled(AppBar)`
  height: 66px;
  background: ${({ theme }) => theme.colors.secondaryBackground} !important;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};

  & button {
    margin: 0 0.5rem;
  }
`;
