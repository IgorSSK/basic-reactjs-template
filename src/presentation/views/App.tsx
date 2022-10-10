import React from 'react';
import HelloWorld from '../components/HelloWorld';
import Formatter from '../../common/utils/formatters';
import { useUi } from '@presentation/hooks/useUi';
import dark from '@presentation/styles/themes/dark';
import light from '@presentation/styles/themes/light';

const App: React.FC = () => {
  const { theme, changeTheme } = useUi();
  return (
      <HelloWorld onClick={() => changeTheme(theme?.title === 'light' ? dark : light)}>
        Hello DEV! {Formatter.datetime(new Date())}
      </HelloWorld>
  );
};

export default App;
