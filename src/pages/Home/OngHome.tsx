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

import OutStock from '../../../assets/OutStock.png';
import Revenue from '../../../assets/Revenue.png';

import {MapLocationOng} from '../MapLocation/MapLocationOng';
import {FeedBackOng} from '../../components/FeedBack/FeedBackOng';

interface MyParams {
  feedBack: boolean;
}

const OngHome: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const route = useRoute();

  const myFeedBack = (route.params as MyParams)?.feedBack;

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleDonation = () => {
    navigation.navigate('OngDonation');
  };

  const handleRevenue = () => {
    navigation.navigate('Revenue');
  };

  const handleCloseFeedBack = () => {
    navigation.navigate('OngHome', {feedBack: false});
  };

  const handleMaps = () => {
    navigation.navigate('MapLocationOng', {showModal: true});
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
              <Title>Seja bem-vindo, ONG</Title>
              <Name>Nova Esperança</Name>
            </TextContent>
          </TextAndShoppingCart>
          <MapContainer activeOpacity={1} onPress={() => handleMaps()}>
            <MapLocationOng />
            <MapContent>
              <MapTextContent>
                <MapTitle>Encontre os doadores mais próximos</MapTitle>
              </MapTextContent>
            </MapContent>
          </MapContainer>
          <CardOptions>
            <Card onPress={() => handleDonation()}>
              <CardImage source={OutStock} />
            </Card>
            <Card onPress={() => handleRevenue()}>
              <CardImage source={Revenue} />
            </Card>
          </CardOptions>
        </Content>
      </ScrollView>
      <BottomViewStyle>
        <BottomViewStyleText>Compartilhe fotos</BottomViewStyleText>
      </BottomViewStyle>
      {myFeedBack ? (
        <FeedBackOng onClose={() => handleCloseFeedBack()} />
      ) : null}
    </Container>
  );
};

export {OngHome};