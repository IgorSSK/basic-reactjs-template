import React from 'react';
import Formatter from '@common/utils/formatters';
import Text from '@presentation/components/Text';

const App: React.FC = () => {
  return <Text>Hello DEV! {Formatter.datetime(new Date())}</Text>;
};

export default App;
