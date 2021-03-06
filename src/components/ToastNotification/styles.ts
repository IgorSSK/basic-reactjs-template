import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Container = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background: ${({ theme }) => theme.colors.danger};
  }
  .Toastify__toast--warning {
    background: ${({ theme }) => theme.colors.warning};
  }
  .Toastify__toast--success {
    background: ${({ theme }) => theme.colors.success};
  }
  .Toastify__toast--info {
    background: ${({ theme }) => theme.colors.info};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
