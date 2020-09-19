import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

export const IconButtonContainer = styled(IconButton)`
  &&.MuiIconButton-root {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
