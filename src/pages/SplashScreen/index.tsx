import React from 'react';

import {StatusBar} from 'react-native';

import {Contaier, Logo} from './styles';

import foodDonation from '../../../assets/food-donation.png';

const SplashScreen: React.FC = () => {
  return (
    <Contaier>
      <StatusBar hidden />
      <Logo source={foodDonation} />
    </Contaier>
  );
};

export {SplashScreen};
