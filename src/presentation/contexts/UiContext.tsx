import ToastNotification from '@presentation/components/ToastNotification';
import light from '@presentation/styles/themes/light';
import usePersistedState from '@presentation/hooks/usePersistedState';
import { createContext, useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { toast } from 'react-toastify';
import useToggle from '@presentation/hooks/useToggle';

interface IUiContext {
  theme: DefaultTheme;
  changeTheme: (theme: DefaultTheme) => void;
  loading: {
    active: boolean;
    dispatch: () => void;
  };
  notify: typeof toast;
}

const UiContext = createContext({} as IUiContext);

const UiProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [isLoading, dispatchLoading] = useToggle(false);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const themeChangeHandler = useCallback((theme: DefaultTheme) => setTheme(theme), []);

  return (
    <UiContext.Provider
      value={{
        theme,
        changeTheme: themeChangeHandler,
        notify: toast,
        loading: { active: isLoading, dispatch: dispatchLoading }
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastNotification />
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider };
