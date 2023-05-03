import React from 'react';
import {ScrollView} from 'react-native';

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
  BottomViewStyleText,
  MapContainer,
  MapContent,
  MapTitle,
  MapTextContent,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {ShoppingCart} from '../../components/ShoppingCart';

import OutStock from '../../../assets/OutStock.png';
import Revenue from '../../../assets/Revenue.png';
import voluntary from '../../../assets/Voluntary.png';

import {FeedBackModal} from '../../components/FeedBack';
import {MapLocation} from '../MapLocation';

interface MyParams {
  feedBack: boolean;
}

const Home: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const route = useRoute();

  const myFeedBack = (route.params as MyParams)?.feedBack;

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleDonation = () => {
    navigation.navigate('Donation');
  };

  const handleRevenue = () => {
    navigation.navigate('Revenue');
  };

  const handleVoluntary = () => {
    navigation.navigate('Voluntary');
  };

  const handleOutStock = () => {
    navigation.navigate('OutStock');
  };

  const handleCloseFeedBack = () => {
    navigation.navigate('Home', {feedBack: false});
  };

  const handleMaps = () => {
    navigation.navigate('MapLocation', {showModal: true});
  };

  return (
    <Container>
      <TopViewStyle />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <MapContainer activeOpacity={0.7} onPress={() => handleMaps()}>
            <MapLocation />
            <MapContent>
              <MapTextContent>
                <MapTitle>Encontre a ONG mais próxima</MapTitle>
              </MapTextContent>
            </MapContent>
          </MapContainer>
          <CardOptions>
            <Card onPress={() => handleOutStock()}>
              <CardImage source={OutStock} />
            </Card>
            <Card onPress={() => handleVoluntary()}>
              <CardImage source={voluntary} />
            </Card>
            <Card onPress={() => handleRevenue()}>
              <CardImage source={Revenue} />
            </Card>
          </CardOptions>
        </Content>
      </ScrollView>
      <BottomViewStyle>
        <BottomViewStyleText>Compartilhe sua Ação</BottomViewStyleText>
      </BottomViewStyle>
      {myFeedBack ? (
        <FeedBackModal onClose={() => handleCloseFeedBack()} />
      ) : null}
    </Container>
  );
};

export {Home};
