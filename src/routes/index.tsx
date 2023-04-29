import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {TouchableOpacityProps} from 'react-native';

import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {SignUp} from '../pages/SignUp';
import {Donation} from '../pages/Donation';
import {OutStock} from '../pages/OutStock';
import {Revenue} from '../pages/Revenue';
import {Voluntary} from '../pages/Voluntary';

type AppRoutes = {
  Home: undefined | {feedBack: boolean};
  Login: undefined;
  profile: undefined;
  SignUp: undefined;
  Donation: undefined;
  FeedBack: undefined;
  OutStock: undefined;
  Revenue: undefined;
  Voluntary: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppRoutes>;

const stack = createNativeStackNavigator<AppRoutes>();

export function StackRoutes() {
  return (
    <stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="SignUp" component={SignUp} />
      <stack.Screen name="Donation" component={Donation} />
      <stack.Screen name="OutStock" component={OutStock} />
      <stack.Screen name="Revenue" component={Revenue} />
      <stack.Screen name="Voluntary" component={Voluntary} />
    </stack.Navigator>
  );
}
