import { ListItemText } from '@mui/material';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import styled, { css } from 'styled-components';

type MenuItemButtonProps = { isNavOpen?: boolean; subItem?: boolean } & ListItemButtonProps;
export const MenuItemButton = styled(ListItemButton)<MenuItemButtonProps>`
  min-height: 48px;
  justify-content: center !important;
  padding-left: 14px !important;
  color: ${({ color, theme }) => theme.colors.text} !important;
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
  visibility: hidden;
`;

type MenuItemContainerProps = { isSidebarOpen: boolean } & ListItemProps;
export const MenuItemContainer = styled(ListItem)<MenuItemContainerProps>`
  display: block;

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      & ${MenuItemButton} {
        justify-content: initial !important;
      }

      & ${MenuItemIcon} {
        min-width: 0 !important;
        margin-right: 24px !important;
      }

      & ${MenuItemText} {
        visibility: visible;
      }
    `}
`;
