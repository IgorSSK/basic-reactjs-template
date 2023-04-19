import styled from 'styled-components';
import Radio from '@mui/material/Radio';

export const RadioContainer = styled.div``;

export const RadioField = styled(Radio)`
  &&.Mui-checked {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &&:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;
