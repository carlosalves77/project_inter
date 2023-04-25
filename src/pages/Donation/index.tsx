import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Header, DonationListText, ButtonContent} from './styles';

import {BackButton} from '../../components/Buttons/BackButton';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {FoodList} from '../../components/FoodList';
import api from '../../services/api/api';
import {Button} from '../../components/Buttons/Button';

const Donation: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const [donations, setDonations] = React.useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await api.get('/foods');
        const data = response.data;
        setDonations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDonations();
  }, []);
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={() => handleBack()} />
      <Header>
        <DonationListText>Lista de doações</DonationListText>
      </Header>

      <FlatList
        style={{marginTop: 20}}
        data={donations}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
      <ButtonContent>
        <Button name="Continuar" isLoading={false} onPress={() => null} />
      </ButtonContent>
    </Container>
  );
};

export {Donation};
