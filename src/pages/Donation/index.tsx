import React, {useEffect} from 'react';
import {FlatList, ScrollView, TouchableOpacityProps, View} from 'react-native';

import {
  Container,
  Header,
  DonationListText,
  ButtonContent,
  DonationListContent,
  Content,
  DonationTotalCard,
  ButtonContentDonation,
  ButtonTitle,
  DonationTotalCardTitle,
  DonationTotalCardText,
  DonationTotalCardContent,
  DonationTotalCardCircle,
  DonationTotalCardCircleValue,
  DonationTotalChosenCardContent,
  DonationTotalChosenCard,
  DonationTotalChosenCardTitle,
  CloseOngsContent,
  ButtonOngTitle,
} from './styles';
import {THEME} from '../../theme';

import {BackButton} from '../../components/Buttons/BackButton';
import {Button} from '../../components/Buttons/Button';
import {ShoppingCart} from '../../components/ShoppingCart';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {FoodList} from '../../components/FoodList';
import api from '../../services/api/api';

interface CustomButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  textColor?: string;
  quantity: number;
}

const Donation: React.FC<CustomButtonProps> = ({
  backgroundColor,
  textColor,
  quantity,
  ...rest
}) => {
  const foods = [
    {
      id: '1',
      name: 'Macarrão',
      peso: '500g',
      foto: 'https://i.ibb.co/TmtRqkJ/Macarr-o.png',
    },
    {
      id: '2',
      name: 'Feijão',
      peso: '1kg',
      foto: 'https://i.ibb.co/hyL9NWQ/Feij-o.png',
    },
    {
      id: '3',
      name: 'Arroz',
      peso: '1kg',
      foto: 'https://i.ibb.co/9r1gq4z/Arroz.png',
    },
    {
      id: '4',
      name: 'Fubá',
      peso: '500g',
      foto: 'https://i.ibb.co/h7HnHJm/Floc-o.png',
    },
    {
      id: '5',
      name: 'Leite integral',
      peso: '1L',
      foto: 'https://i.ibb.co/R6pCLgY/Leite-Integral.png',
    },
    {
      id: '6',
      name: 'Açúcar',
      peso: '1kg',
      foto: 'https://i.ibb.co/GvPDNvF/A-ucar.png',
    },
  ];
  const [donations] = React.useState(foods);
  const [endDonation, setEndDonation] = React.useState(true);

  const [button1Active, setButton1Active] = React.useState(false);
  const [button2Active, setButton2Active] = React.useState(true);

  const [choseOng, setChoseOng] = React.useState(true);

  const navigation = useNavigation<AppNavigationProps>();

  //   useEffect(() => {
  //     const fetchDonations = async () => {
  //       try {
  //         const response = await api.get('/foods');
  //         const data = response.data;
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchDonations();
  //   }, []);

  const handleBack = () => {
    if (endDonation) {
      navigation.navigate('Home');
    } else {
      setEndDonation(!endDonation);
    }
  };

  const handleButton1Press = () => {
    setButton1Active(false);
    setButton2Active(true);
    setChoseOng(true);
  };

  const handleButton2Press = () => {
    setButton2Active(false);
    setButton1Active(true);
    setChoseOng(false);
  };

  const handleButtonConfirm = () => {
    setEndDonation(!endDonation);
  };

  const handleFeedBack = () => {
    navigation.navigate('Home', {feedBack: true});
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleBack()} />
        <ShoppingCart disabled />
      </Header>
      <DonationListContent>
        <DonationListText>Lista de doações</DonationListText>
      </DonationListContent>

      {endDonation ? (
        <Content>
          <FlatList
            style={{marginTop: 20, width: '100%'}}
            data={donations}
            //@ts-ignore
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <FoodList data={item} onQuantityChange={() => {}} />
            )}
            showsVerticalScrollIndicator={false}
          />
          <ButtonContent>
            <Button
              name="Continuar"
              isLoading={false}
              onPress={() => handleButtonConfirm()}
            />
          </ButtonContent>
        </Content>
      ) : (
        <Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            <DonationTotalCard>
              <View style={{height: 220, alignItems: 'center'}}>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center',
                  }}
                  indicatorStyle="white"
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator={false}>
                  {donations.map((item: any, index) => (
                    <DonationTotalCardContent key={index}>
                      <DonationTotalCardTitle key={index}>
                        {item.name}
                      </DonationTotalCardTitle>
                      <DonationTotalCardText key={index}>
                        {item.peso}
                      </DonationTotalCardText>
                      <DonationTotalCardCircle key={index}>
                        <DonationTotalCardCircleValue key={index}>
                          3
                        </DonationTotalCardCircleValue>
                      </DonationTotalCardCircle>
                    </DonationTotalCardContent>
                  ))}
                </ScrollView>
              </View>

              <DonationTotalChosenCardContent>
                <DonationTotalChosenCard
                  onPress={() => handleButton1Press()}
                  background={
                    button1Active ? THEME.colors.red : THEME.colors.white
                  }>
                  <DonationTotalChosenCardTitle
                    textColor={
                      button1Active ? THEME.colors.white : THEME.colors.red
                    }>
                    Você vai{'\n'}até a ONG
                  </DonationTotalChosenCardTitle>
                </DonationTotalChosenCard>
                <DonationTotalChosenCard
                  onPress={() => handleButton2Press()}
                  background={
                    button2Active ? THEME.colors.red : THEME.colors.white
                  }>
                  <DonationTotalChosenCardTitle
                    textColor={
                      button2Active ? THEME.colors.white : THEME.colors.red
                    }>
                    A ONG{'\n'}vai até você
                  </DonationTotalChosenCardTitle>
                </DonationTotalChosenCard>
              </DonationTotalChosenCardContent>
            </DonationTotalCard>

            {choseOng ? (
              <CloseOngsContent>
                <ButtonOngTitle>ONGS mais{'\n'}próximas</ButtonOngTitle>
              </CloseOngsContent>
            ) : null}

            <ButtonContentDonation onPress={() => handleFeedBack()}>
              <ButtonTitle>Finalizar</ButtonTitle>
            </ButtonContentDonation>
          </ScrollView>
        </Content>
      )}
    </Container>
  );
};

export {Donation};
