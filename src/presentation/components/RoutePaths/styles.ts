import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const RoutePathsContainer = styled.div``;
export const Paths = styled(Breadcrumbs)`
  & li {
    color: ${({ theme }) => theme.colors.text};
  }

  & a {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
