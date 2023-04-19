import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import fn from '@presentation/styles/utils/converters';

export const InputField = styled(TextField)`
  &.MuiTextField-root {
    .MuiFormLabel-root {
      color: ${({ theme }) => theme.colors.text};

      &.Mui-focused {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }

    .MuiInputBase-root {
      color: ${({ theme }) => theme.colors.text};

      &:after {
        border-bottom-color: ${({ theme }) => theme.colors.highlight};
      }

      input {
        &::placeholder,
        &::-ms-input-placeholder {
          color: #fff;
        }
      }
    }

    .MuiOutlinedInput-root {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) =>
          fn.hexToRGB(theme.colors.text, theme.title === 'dark' ? '0.095' : '0.2')};
      }

      &:hover,
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${({ theme }) => theme.colors.highlight};
        }
      }
    }

    .MuiInput-underline {
      &:before {
        border-bottom-color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
