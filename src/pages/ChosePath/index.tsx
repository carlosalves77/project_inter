import React from 'react';

import {Container, Button, ButtonText, Title} from './styles';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

const ChosePath: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <Container>
      <Title>Escolha uma rota</Title>
      <Button onPress={() => navigation.navigate('Home')}>
        <ButtonText>Doador</ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate('OngHome')}>
        <ButtonText>ONG</ButtonText>
      </Button>
    </Container>
  );
};

export {ChosePath};
