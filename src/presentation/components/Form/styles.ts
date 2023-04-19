import styled from 'styled-components';

export const FormContainer = styled.form``;

export const FormBox = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    margin: ${({ theme }) => theme.space[1]} !important;
  }
`;
