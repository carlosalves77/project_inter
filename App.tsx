import React from 'react';
import {StackRoutes} from './src/routes';

import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default App;
