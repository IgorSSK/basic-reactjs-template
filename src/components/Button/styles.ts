import styled from 'styled-components';

export const ButtonDefault = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: ${props => props.theme.space[1]};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => props.theme.space[4]};
  font-size: ${props => props.theme.fontSizes.md};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  transition: background 100ms ease-in-out, color 150ms ease-in-out;
`;

export const ButtonOutlined = styled(ButtonDefault)`
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;
