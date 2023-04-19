import React from 'react';
import { createRoot } from 'react-dom/client';
import { UiProvider } from '@presentation/contexts/UiContext';
import RoutesConfig from '@main/routes';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <UiProvider>
      <RoutesConfig />
    </UiProvider>
  </React.StrictMode>
);
