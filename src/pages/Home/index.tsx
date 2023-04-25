import React from 'react';

import {
  Container,
  Title,
  LogoutButton,
  Name,
  TopViewStyle,
  Content,
  BottomViewStyle,
  TextAndShoppingCart,
  TextContent,
  CardOptions,
  Card,
  CardImage,
  MapContent,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {ShoppingCart} from '../../components/ShoppingCart';
import {MapLocation} from '../../components/MapLocation';

import OutStock from '../../../assets/OutStock.png';
import Revenue from '../../../assets/Revenue.png';
import voluntary from '../../../assets/Voluntary.png';

const Home: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const handleLogout = () => {
    console.log('Logout');
  };

  const handleDonation = () => {
    navigation.navigate('Donation');
  };

  return (
    <Container>
      <TopViewStyle />
      <Content>
        <LogoutButton onPress={() => handleLogout()}>
          <Icon name="log-out" size={24} color="#fff" />
        </LogoutButton>
        <TextAndShoppingCart>
          <TextContent>
            <Title>Seja bem-vindo,</Title>
            <Name>Gabriel Monteiro</Name>
          </TextContent>
          <ShoppingCart
            onPress={() => {
              handleDonation();
            }}
          />
        </TextAndShoppingCart>
        <MapContent>{/* <MapLocation /> */}</MapContent>
        <CardOptions>
          <Card onPress={() => {}}>
            <CardImage source={OutStock} />
          </Card>
          <Card onPress={() => {}}>
            <CardImage source={voluntary} />
          </Card>
          <Card onPress={() => {}}>
            <CardImage source={Revenue} />
          </Card>
        </CardOptions>
      </Content>
      <BottomViewStyle />
    </Container>
  );
};

export {Home};
