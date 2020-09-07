import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Button from './components/Button';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button
        onClick={() => setTheme(theme.title === 'light' ? dark : light)}
      />
    </ThemeProvider>
  );
};

export default App;
