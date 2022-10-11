import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const TextContainer = styled(Typography)`
  color: ${({ theme }) => theme.colors.text};
`;
