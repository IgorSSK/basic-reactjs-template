import Drawer from '@mui/material/Drawer';
import styled, { css } from 'styled-components';

export const SidebarContainer = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;

  & .MuiDrawer-paper {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    overflow-x: hidden;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  }

  & hr {
    background: ${({ theme }) => theme.colors.primaryLight};
    opacity: 0.3;
  }

  ${props =>
    props.open
      ? css`
          width: ${({ theme }) => theme.space[64]};
          overflow-x: hidden;
          transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
          & .MuiDrawer-paper {
            width: ${({ theme }) => theme.space[64]};
          }
        `
      : css`
          width: ${({ theme }) => theme.space[20]};
          overflow-x: hidden;
          transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
          & .MuiDrawer-paper {
            width: ${({ theme }) => theme.space[20]};
          }
        `}
`;
