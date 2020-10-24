import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.elevation[1]};
  padding: ${({ theme }) => theme.space[4]};
  margin: ${({ theme }) => theme.space[2]};
  background: ${({ theme }) => theme.title === 'light' ? theme.colors.background : theme.colors.textColorDark}
`;
