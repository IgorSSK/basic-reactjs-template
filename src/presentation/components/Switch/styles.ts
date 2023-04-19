import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import fn from '@presentation/styles/utils/converters';

export const SwitchContainer = styled(Switch)`
  & .MuiSwitch-switchBase {
    &.Mui-checked {
      color: ${({ theme }) => theme.colors.highlight};

      & + .MuiSwitch-track {
        background-color: ${({ theme }) => theme.colors.highlight};
      }
      & .MuiSwitch-thumb {
        background: ${({ theme }) => theme.colors.highlight};
        /* background-color: ${({ theme }) => theme.colors.background}; */
      }

      & .MuiTouchRipple-root {
        color: ${({ theme }) => theme.colors.highlight};
      }

      &:hover {
        background-color: ${({ theme }) => fn.hexToRGB(theme.colors.highlight, '0.04')};
        color: ${({ theme }) => theme.colors.highlight};
      }
    }
  }
`;

export const SwitchIconWrapper = styled.span`
  display: flex;
  width: ${({ theme }) => theme.space[5]};
  height: ${({ theme }) => theme.space[5]};
  background: ${({ theme }) => theme.colors.highlight};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
