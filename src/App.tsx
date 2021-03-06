import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import HelloWorld from './components/HelloWorld';
import dark from './styles/themes/dark';
import ToastNotification from './components/ToastNotification';
import Formatter from './helpers/formatters';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const themeChangeHandler = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HelloWorld onClick={themeChangeHandler}>
        Hello DEV! {Formatter.datetime(new Date())}
      </HelloWorld>
      <ToastNotification />
    </ThemeProvider>
  );
};

export default App;
