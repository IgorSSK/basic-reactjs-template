import styled from 'styled-components';

export const Container = styled.div`
  && .MuiPaper-root,
  && .MuiTableCell-root {
    background: ${({ theme }) => theme.colors.background};
  }

  && .MuiTableCell-root {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
