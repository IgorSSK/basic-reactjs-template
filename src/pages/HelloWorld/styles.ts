import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.secondary};
`;

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.space[4]};
`;
