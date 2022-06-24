import styled, { css } from 'styled-components';

const spacing = '0.65rem';

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0, 0);
  transform-origin: 0 0;

  cursor: text;

  padding: calc(${spacing} * 0.75) calc(${spacing} * 0.5);
  margin: calc(${spacing} * 0.75) calc(${spacing} * 0.5);

  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  transition: transform 120ms ease-in;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InputField = styled.input`
  display: block;
  outline: 0;
  /* box-sizing: border-box; */
  border: 0;

  padding: calc(${spacing} * 1.5) ${spacing};

  font-size: ${({ theme }) => theme.fontSizes.lg};
  background: ${({ theme }) => theme.colors.transparent};

  &:not(:placeholder-shown) {
    & + ${Label} {
      transform: translate(0.25rem, -65%) scale(0.75);
      padding: 1px 5px;
      background: ${({ theme }) => theme.colors.background};
    }
  }
`;

type WrapperProps = {
  error: boolean;
};

export const Adornment = styled.span`
  font-size: large;
  margin: 0 calc(${spacing} * 0.5);
  white-space: nowrap;
  cursor: default;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & ~ ${Label} {
    transform: translate(0.25rem, -65%) scale(0.75);
    background: ${({ theme }) => theme.colors.background};
    padding: 1px 5px;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  margin: calc(${spacing} * 0.75) calc(${spacing} * 0.25);

  border: rgba(0, 0, 0, 0.25) solid 1px;
  border-radius: 5px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    ${Label} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
    ${Label} {
      transform: translate(0.25rem, -65%) scale(0.75);
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
      padding: 1px 5px;
    }
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};

      ${InputField} {
        & + ${Label} {
          color: ${({ theme }) => theme.colors.danger};
        }
      }
    `}
`;

export const SpanError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  margin-left: calc(${spacing} * 1.4);
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
