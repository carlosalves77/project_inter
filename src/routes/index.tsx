import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {SignUp} from '../pages/SignUp';
import {Donation} from '../pages/Donation';
import {OutStock} from '../pages/OutStock';

type AppRoutes = {
  Home: undefined;
  Login: undefined;
  profile: undefined;
  SignUp: undefined;
  Donation: undefined;
  FeedBack: undefined;
  OutStock: undefined;
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
    </stack.Navigator>
  );
}
