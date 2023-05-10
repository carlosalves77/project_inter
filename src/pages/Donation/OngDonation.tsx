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
} from './styles';

import {BackButton} from '../../components/Buttons/BackButton';
import {Button} from '../../components/Buttons/Button';
import {ShoppingCart} from '../../components/ShoppingCart';
import {FoodList} from '../../components/FoodList';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {useDispatch, useSelector} from 'react-redux';

import Toast from 'react-native-toast-message';
import {reset} from '../../redux/useSlice';

interface Person {
  name: string;
}

interface State {
  listValue: {value: Person[]};
}

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
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation<AppNavigationProps>();

  const {value} = useSelector((state: any) => state.listValue);

  const uniqueNames: {[name: string]: boolean} = {};
  const uniquePeople: Person[] = [];

  //@ts-ignore
  value.forEach(person => {
    if (!uniqueNames[person.name]) {
      uniqueNames[person.name] = true;
      uniquePeople.push(person);
    }
  });

  const nameCounts = new Map<string, number>();

  //@ts-ignore
  value.forEach(person => {
    const count = nameCounts.get(person.name) || 0;
    nameCounts.set(person.name, count + 1);
  });

  const handleBack = () => {
    if (endDonation) {
      navigation.navigate('OngHome');
    } else {
      setEndDonation(!endDonation);
    }
  };

  const handleFeedBack = () => {
    navigation.navigate('OngHome');
    dispatch(reset());
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
          <DonationTotalCardCircleValue>
            {nameCounts.get(item.name)}
          </DonationTotalCardCircleValue>
        </DonationTotalCardCircle>
      </DonationTotalCardContent>
    );
  };

  const handleButtonConfirm = () => {
    if (value.length === 0) {
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 2000);

      Toast.show({
        type: 'error',
        text1: 'Adicione algum item!',
      });
    } else {
      setEndDonation(!endDonation);
    }
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
              disabled={buttonDisabled}
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
                  data={uniquePeople}
                  //@ts-ignore
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
      <Toast position="top" />
    </Container>
  );
};

export {OngDonation};
