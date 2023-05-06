import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// Donation Path

import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {SignUp} from '../pages/SignUp';
import {Donation} from '../pages/Donation';
import {OutStock} from '../pages/OutStock';
import {Revenue} from '../pages/Revenue/Revenue';
import {Voluntary} from '../pages/Voluntary';
import {RevenueList} from '../pages/Revenue/RevenueList';
import {RevenueExplorer} from '../pages/Revenue/RevenueExplorer';
import {MapLocation} from '../pages/MapLocation';
import {ChosePath} from '../pages/ChosePath';

// ONG Path

import {OngHome} from '../pages/Home/OngHome';
import {OngDonation} from '../pages/Donation/OngDonation';
import {MapLocationOng} from '../pages/MapLocation/MapLocationOng';
import {DonationCloses} from '../pages/DonationCloses';

type AppRoutes = {
  // Donation Path

  Home: undefined | {feedBack: boolean};
  Login: undefined;
  profile: undefined;
  SignUp: undefined;
  Donation: undefined;
  FeedBack: undefined;
  OutStock: undefined;
  Revenue: undefined;
  Voluntary: undefined;
  RevenueList: undefined;
  ChosePath: undefined;
  RevenueExplorer: undefined;
  MapLocation: undefined | {showModal: boolean};

  // ONG Path

  OngHome: undefined | {feedBack: boolean};
  OngDonation: undefined;
  MapLocationOng: undefined | {showModal: boolean};
  DonationCloses: undefined | {Name: string};
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
      {/* @ts-ignore */}
      <stack.Screen name="Donation" component={Donation} />
      <stack.Screen name="OutStock" component={OutStock} />
      <stack.Screen name="Revenue" component={Revenue} />
      <stack.Screen name="Voluntary" component={Voluntary} />
      <stack.Screen name="RevenueList" component={RevenueList} />
      <stack.Screen name="RevenueExplorer" component={RevenueExplorer} />
      <stack.Screen name="MapLocation" component={MapLocation} />
      <stack.Screen name="ChosePath" component={ChosePath} />

      <stack.Screen name="OngHome" component={OngHome} />
      {/* @ts-ignore */}
      <stack.Screen name="OngDonation" component={OngDonation} />
      <stack.Screen name="MapLocationOng" component={MapLocationOng} />
      {/* @ts-ignore */}
      <stack.Screen name="DonationCloses" component={DonationCloses} />
    </stack.Navigator>
  );
}
