import React from 'react';
import {StackRoutes} from './src/routes';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/redux/store';

import {SplashScreen} from './src/pages/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        {showSplash && <SplashScreen />}
        {!showSplash && <StackRoutes />}
      </Provider>
    </NavigationContainer>
  );
};

export default App;
