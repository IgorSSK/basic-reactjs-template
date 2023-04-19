import { ListItemText, Menu } from '@mui/material';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import styled, { css } from 'styled-components';
import fn from '@presentation/styles/utils/converters';

type MenuItemButtonProps = { isNavOpen?: boolean; subItem?: boolean } & ListItemButtonProps;
export const MenuItemButton = styled(ListItemButton)<MenuItemButtonProps>`
  min-height: 48px;
  justify-content: center !important;
  padding-left: 14px !important;
  color: ${({ color, theme }) => theme.colors.text} !important;

  &.MuiListItemButton-root.Mui-selected {
    background-color: ${({ theme }) => fn.hexToRGB(theme.colors.highlight, '0.08')};
    &:hover {
      background-color: ${({ theme }) => fn.hexToRGB(theme.colors.highlight, '0.1')};
    }
    & .MuiListItemText-root {
      color: ${({ theme }) => theme.colors.highlight};
    }

    & .MuiListItemIcon-root {
      & svg {
        fill: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  ${({ isNavOpen, subItem }) => {
    if (subItem)
      return css`
        padding-left: ${isNavOpen ? '40px' : '3px'} !important;
      `;
  }}
`;

export const MenuItemIcon = styled(ListItemIcon)`
  min-width: 56px !important;
  margin-right: auto !important;
  justify-content: center !important;
  font-size: larger !important;

  & svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const MenuItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
  /* visibility: hidden; */
`;

type MenuItemContainerProps = { isSidebarOpen: boolean } & ListItemProps;
export const MenuItemContainer = styled(ListItem)<MenuItemContainerProps>`
  display: block;

  ${({ isSidebarOpen }) =>
    css`
      & ${MenuItemButton} {
        justify-content: ${isSidebarOpen ? 'initial' : 'center'} !important;
      }

      & ${MenuItemIcon} {
        min-width: ${isSidebarOpen ? '0' : '56px'} !important;
        margin-right: ${isSidebarOpen ? '24px' : 'auto'} !important;
      }

      & ${MenuItemText} {
        visibility: ${isSidebarOpen ? 'visible' : 'hidden'};
      }
    `}
`;

export const MenuItemSubmenu = styled(Menu)`
  & .MuiPaper-root {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    width: ${({ theme }) => theme.space[56]};
  }
  & ${MenuItemButton} {
    padding-left: 14px !important;
    justify-content: initial !important;
  }

  & ${MenuItemIcon} {
    min-width: 0 !important;
    margin-right: 24px !important;
  }

  & ${MenuItemText} {
    visibility: visible;
  }
`;
