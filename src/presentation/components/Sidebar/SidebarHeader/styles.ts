import styled, { css } from 'styled-components';

type SidebarProps = { isSidebarOpen: boolean };
export const SidebarHeaderContainer = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ isSidebarOpen }) => (isSidebarOpen ? 'space-between' : 'center')};
  padding: 0px 8px;
  height: 65px;

  & img {
    width: ${({ theme }) => theme.space[8]};
    height: ${({ theme }) => theme.space[8]};
    justify-self: flex-start;
    margin: 0 8px;
    ${({ isSidebarOpen }) =>
      !isSidebarOpen &&
      css`
        display: none;
      `};
  }

  & h6 {
    ${({ isSidebarOpen }) =>
      !isSidebarOpen &&
      css`
        display: none;
      `};
  }
`;
