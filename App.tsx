import React from 'react';
import {StackRoutes} from './src/routes';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackRoutes />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
