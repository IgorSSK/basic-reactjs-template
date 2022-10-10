import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from './styles';

const ToastNotification: React.FC = () => {
  return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        limit={5}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  );
};

export default ToastNotification;
