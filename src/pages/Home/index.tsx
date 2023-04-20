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
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import {ShoppingCart} from '../../components/ShoppingCart';
import {MapLocation} from '../../components/MapLocation';

import OutStock from '../../../assets/OutStock.svg';
import Revenue from '../../../assets/Revenue.svg';
import voluntary from '../../../assets/Voluntary.svg';

const Home: React.FC = () => {
  const handleLogout = () => {
    console.log('Logout');
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
          <ShoppingCart />
        </TextAndShoppingCart>
        {/* <MapLocation /> */}
        <CardOptions>
          <Card>
            <CardImage source={OutStock} />
          </Card>
        </CardOptions>
      </Content>
      <BottomViewStyle />
    </Container>
  );
};

export {Home};
