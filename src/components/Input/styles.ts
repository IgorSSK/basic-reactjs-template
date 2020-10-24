import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const InputField = styled(TextField)`
  &&.MuiTextField-root {
    .MuiFormLabel-root {
        color: ${({ theme }) => theme.colors.textColor};

        &.Mui-focused {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .MuiInputBase-root {
        color: ${({ theme }) => theme.colors.textColor};
        
        &:after {
            border-bottom-color: ${({ theme }) => theme.colors.secondary};
        }

        input {
            &::placeholder, &::-ms-input-placeholder {
                color: #FFF;
            }
        }
    }

    .MuiOutlinedInput-root {
        &:hover, &.Mui-focused  {
            .MuiOutlinedInput-notchedOutline {
                border-color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }

    .MuiInput-underline {
        &:before {
            border-bottom-color: ${({ theme }) => theme.colors.textColor};
        }
    }
  }
`;
