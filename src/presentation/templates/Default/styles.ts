import styled from 'styled-components';

export const DefaultTemplateContainer = styled.div`
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.space[12]};
  background: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
`;

export const Body = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  min-height: calc(100vh - 42px - 24px - 96px - 66px);
  padding: ${({ theme }) => theme.space[6]};
`;
