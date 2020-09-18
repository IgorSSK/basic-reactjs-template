import styled from 'styled-components';

export const Container = styled.div`
  && .MuiPaper-root,
  && .MuiTableCell-root {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
  }

  && .MuiTableCell-root {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
