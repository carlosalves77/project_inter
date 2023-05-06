import React from 'react';

import {StatusBar} from 'react-native';

import {Container, Logo} from './styles';

import foodDonation from '../../../assets/food-donation.png';

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar hidden />
      <Logo source={foodDonation} />
    </Container>
  );
};

export {SplashScreen};
