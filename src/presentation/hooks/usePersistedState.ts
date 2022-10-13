import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>, () => void];

function usePersistedState<T>(
  key: string,
  initialState: T,
  strategy: 'localStorage' | 'cookies' = 'localStorage'
): Response<T> {
  const [state, setState] = useState(() => {
    let storageValue = initialState;
    if (strategy === 'localStorage') {
      const item = localStorage.getItem(key);
      if (item) storageValue = JSON.parse(item);
    } else {
      const item = document.cookie
        .split(';')
        ?.find(cookie => cookie.startsWith(key))
        ?.split('=')
        .at(1);
      if (item) storageValue = JSON.parse(item);
    }

    return storageValue;
  });

  useEffect(() => {
    if (strategy === 'localStorage') localStorage.setItem(key, JSON.stringify(state));
    else document.cookie = `${key}=${JSON.stringify(state)};SameSite=None;Secure`;
  }, [key, state, strategy]);

  const reset = useCallback(() => {
    if (strategy === 'localStorage') localStorage.removeItem(key);
    else document.cookie = `${key}=${JSON.stringify(state)};max-age=0`;

    setState(initialState);
  }, [key, state, strategy]);

  // TODO: implement reset to clear key on storage

  return [state, setState, reset];
}

export default usePersistedState;
