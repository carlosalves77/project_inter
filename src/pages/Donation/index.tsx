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
  const [donations, setDonations] = React.useState([]);
  const [endDonation, setEndDonation] = React.useState(true);

  const [button1Active, setButton1Active] = React.useState(false);
  const [button2Active, setButton2Active] = React.useState(true);

  const [choseOng, setChoseOng] = React.useState(true);

  const navigation = useNavigation<AppNavigationProps>();

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
            style={{marginTop: 20}}
            data={donations}
            //@ts-ignore
            keyExtractor={item => item.id}
            renderItem={({item}) => <FoodList data={item} />}
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
                  nestedScrollEnabled={true}>
                  {donations.map((item: any) => (
                    <DonationTotalCardContent>
                      <DonationTotalCardTitle>
                        {item.name}
                      </DonationTotalCardTitle>
                      <DonationTotalCardText>{item.peso}</DonationTotalCardText>
                      <DonationTotalCardCircle>
                        <DonationTotalCardCircleValue>
                          3
                        </DonationTotalCardCircleValue>
                      </DonationTotalCardCircle>
                    </DonationTotalCardContent>
                  ))}
                </ScrollView>
              </View>

              {/* <DonationTotalCardContent>
                <DonationTotalCardTitle>Leite Integral</DonationTotalCardTitle>
                <DonationTotalCardText>500g</DonationTotalCardText>
                <DonationTotalCardCircle>
                  <DonationTotalCardCircleValue>3</DonationTotalCardCircleValue>
                </DonationTotalCardCircle>
              </DonationTotalCardContent> */}

              {
                // <DonationTotalChosenCardContent>
              }
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
