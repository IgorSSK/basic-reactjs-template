import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
`;

export const LoadingProgress = styled(LinearProgress)`
  height: 6px;
`;
