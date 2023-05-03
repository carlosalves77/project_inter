import React from 'react';
import {ScrollView} from 'react-native';

import {
  AvalibleContent,
  AvalibleText,
  Container,
  IngredientsBox,
  IngredientsContent,
  IngredientsList,
  PreparationContent,
  PreparationMethodBox,
  PreparationMethodList,
  RevenueListContent,
  RevenueListText,
  StarsContent,
  Title,
} from './styles';

import {BackButton} from '../../../components/Buttons/BackButton';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../routes';

import Icon from 'react-native-vector-icons/Ionicons';
import {FeedBackOng} from '../../../components/FeedBack/FeedBackOng';

const RevenueExplorerOng: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation<AppNavigationProps>();

  const mapRow = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
  ];

  const starRow = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => handleBackButton()} />
        <RevenueListContent>
          <RevenueListText>Macarrão em panela de pressão</RevenueListText>
        </RevenueListContent>
        <IngredientsBox>
          <Title>Ingredientes</Title>
          <IngredientsContent>
            <ScrollView
              style={{width: '100%', padding: 5}}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}>
              {mapRow.map(item => (
                <IngredientsList>• 1 fio de azeite</IngredientsList>
              ))}
            </ScrollView>
          </IngredientsContent>
        </IngredientsBox>
        <PreparationMethodBox>
          <Title>Modo de Preparo</Title>
          <PreparationContent>
            <ScrollView
              style={{width: '100%', padding: 5}}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}>
              {mapRow.map(item => (
                <PreparationMethodList>
                  • Em uma panela de pressão, aqueça 1 fio de azeite e refogue a
                  cebola e o alho picado.
                </PreparationMethodList>
              ))}
            </ScrollView>
          </PreparationContent>
        </PreparationMethodBox>
        <AvalibleContent onPress={() => handleModal()}>
          <AvalibleText>Avalie essa receita</AvalibleText>
          <StarsContent>
            {starRow.map(item => (
              <Icon name="star" size={45} color="red" key={item.id} />
            ))}
          </StarsContent>
        </AvalibleContent>
      </ScrollView>
      {modalVisible ? (
        <FeedBackOng
          onClose={() => navigation.navigate('OngHome', {feedBack: false})}
        />
      ) : null}
    </Container>
  );
};

export {RevenueExplorerOng};
