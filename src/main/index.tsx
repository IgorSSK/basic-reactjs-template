import React from 'react';
import {createRoot} from 'react-dom/client';
import App from '@presentation/views/App';
import { UiProvider } from '@presentation/contexts/UiContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <UiProvider>
    <App />
    </UiProvider>
  </React.StrictMode>
);
