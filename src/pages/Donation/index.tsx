import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacityProps,
  View,
  ListRenderItemInfo,
} from 'react-native';

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
import Toast from 'react-native-toast-message';

import {BackButton} from '../../components/Buttons/BackButton';
import {Button} from '../../components/Buttons/Button';
import {ShoppingCart} from '../../components/ShoppingCart';
import {FoodList} from '../../components/FoodList';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import {useDispatch, useSelector} from 'react-redux';

import {reset} from '../../redux/useSlice';
import {ItemToItemRecomedation} from '../../components/FeedBack/ItemToItemRecomedation';

interface CustomButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  textColor?: string;
  quantity: number;
}
interface Person {
  name: string;
}

type Produto = {
  name: string;
  foto: string;
};

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
  const [secondButton, setSecondButton] = React.useState(true);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [button1Active, setButton1Active] = React.useState(false);
  const [button2Active, setButton2Active] = React.useState(true);

  const [choseOng, setChoseOng] = React.useState(true);
  const [showMessage, setShowMessage] = React.useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation<AppNavigationProps>();

  const {value} = useSelector((state: any) => state.listValue);

  const uniqueNames: {[name: string]: boolean} = {};
  const uniquePeople: Person[] = [];

  const random: Produto[] = [
    {
      name: 'Macarrão',
      foto: 'https://i.ibb.co/TmtRqkJ/Macarr-o.png',
    },
    {
      name: 'Feijão',
      foto: 'https://i.ibb.co/hyL9NWQ/Feij-o.png',
    },
    {
      name: 'Arroz',
      foto: 'https://i.ibb.co/9r1gq4z/Arroz.png',
    },
    {
      name: 'Fubá',
      foto: 'https://i.ibb.co/h7HnHJm/Floc-o.png',
    },
    {
      name: 'Leite Integral',
      foto: 'https://i.ibb.co/R6pCLgY/Leite-Integral.png',
    },
    {
      name: 'Açucar',
      foto: 'https://i.ibb.co/GvPDNvF/A-ucar.png',
    },
  ];

  const produtoAleatorio = random[Math.floor(Math.random() * random.length)];

  function getFotoProduto(name: string): string {
    switch (produtoAleatorio.name) {
      case 'Macarrão':
        return 'https://i.ibb.co/TmtRqkJ/Macarr-o.png';
      case 'Feijão':
        return 'https://i.ibb.co/hyL9NWQ/Feij-o.png';
      case 'Arroz':
        return 'https://i.ibb.co/9r1gq4z/Arroz.png';
      case 'Fubá':
        return 'https://i.ibb.co/h7HnHJm/Floc-o.png';
      case 'Leite Integral':
        return 'https://i.ibb.co/R6pCLgY/Leite-Integral.png';
      case 'Açucar':
        return 'https://i.ibb.co/GvPDNvF/A-ucar.png';
      default:
        return '';
    }
  }

  const fotoProduto = getFotoProduto(produtoAleatorio.name);

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

  const handleFeedBack = () => {
    navigation.navigate('Home', {feedBack: true});
    dispatch(reset());
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <FoodList data={item} index={index} />;
  };

  //@ts-ignore
  const renderItemListDonation = ({item, index}: ListRenderItemInfo<item>) => {
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
    }

    if (endDonation && value.length !== 0) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      setSecondButton(!secondButton);
    }
  };

  const handleButtonConfirmNextStep = () => {
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
        <DonationListText>Lista de doações</DonationListText>
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
            {secondButton ? (
              <Button
                name="Continuar"
                isLoading={false}
                onPress={() => handleButtonConfirm()}
                disabled={buttonDisabled}
              />
            ) : (
              <Button
                name="Continuar"
                isLoading={false}
                onPress={() => handleButtonConfirmNextStep()}
                disabled={buttonDisabled}
              />
            )}
          </ButtonContent>
        </Content>
      ) : (
        <Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            <DonationTotalCard>
              <View style={{height: 220}}>
                <FlatList
                  style={{marginTop: 20, width: '100%'}}
                  contentContainerStyle={{alignItems: 'center'}}
                  data={uniquePeople}
                  //@ts-ignore
                  keyExtractor={(item): any => item.id}
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItemListDonation}
                />
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
              <CloseOngsContent
                onPress={() =>
                  navigation.navigate('MapLocation', {showModal: true})
                }>
                <ButtonOngTitle>ONGS mais{'\n'}próximas</ButtonOngTitle>
              </CloseOngsContent>
            ) : null}

            <ButtonContentDonation onPress={() => handleFeedBack()}>
              <ButtonTitle>Finalizar</ButtonTitle>
            </ButtonContentDonation>
          </ScrollView>
        </Content>
      )}

      <Toast position="top" />
      {showMessage ? (
        <ItemToItemRecomedation
          name={produtoAleatorio.name}
          foto={fotoProduto}
        />
      ) : null}
    </Container>
  );
};

export {Donation};
