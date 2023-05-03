import React from 'react';
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
import {FoodList} from '../../components/FoodList';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import api from '../../services/api/api';
import {useSelector} from 'react-redux';

interface CustomButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  textColor?: string;
  quantity: number;
}

const OngDonation: React.FC<CustomButtonProps> = ({
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

  const navigation = useNavigation<AppNavigationProps>();

  const {value} = useSelector((state: any) => state.listValue);

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
      navigation.navigate('OngHome');
    } else {
      setEndDonation(!endDonation);
    }
  };

  const handleFeedBack = () => {
    navigation.navigate('OngHome');
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <FoodList data={item} index={index} />;
  };

  const renderItemListDonation = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    return (
      <DonationTotalCardContent>
        <DonationTotalCardTitle>{item.name}</DonationTotalCardTitle>
        <DonationTotalCardText>{item.peso}</DonationTotalCardText>
        <DonationTotalCardCircle>
          <DonationTotalCardCircleValue>{index}</DonationTotalCardCircleValue>
        </DonationTotalCardCircle>
      </DonationTotalCardContent>
    );
  };

  const handleButtonConfirm = () => {
    setEndDonation(!endDonation);
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleBack()} />
        <ShoppingCart disabled />
      </Header>
      <DonationListContent>
        <DonationListText>Falta de estoque</DonationListText>
      </DonationListContent>

      {endDonation ? (
        <Content>
          <FlatList
            style={{marginTop: 20, width: '100%'}}
            data={donations}
            keyExtractor={item => item.id}
            renderItem={renderItem}
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
              <View style={{height: '100%', alignItems: 'center'}}>
                <FlatList
                  style={{marginTop: 10, marginBottom: 40, width: '100%'}}
                  contentContainerStyle={{alignItems: 'center'}}
                  data={value}
                  keyExtractor={(item): any => item.id}
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItemListDonation}
                />
              </View>
            </DonationTotalCard>

            <ButtonContentDonation onPress={() => handleFeedBack()}>
              <ButtonTitle>Finalizar</ButtonTitle>
            </ButtonContentDonation>
          </ScrollView>
        </Content>
      )}
    </Container>
  );
};

export {OngDonation};
