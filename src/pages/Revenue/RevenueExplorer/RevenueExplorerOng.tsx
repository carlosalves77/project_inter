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
import {FeedBackAvaliation} from '../../../components/FeedBack/FeedBackAvaliation';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps} from '../../../routes';

import Icon from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../../../redux/useAvaliationSucess';

interface MyParams {
  NameParamas: string;
}

const RevenueExplorerOng: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const {isModalFeedBackOpen} = useSelector(
    (state: any) => state.modalAvaliation,
  );

  const route = useRoute();

  const NameRevenue = (route.params as MyParams)?.NameParamas;

  const dispatch = useDispatch();

  const [name] = React.useState(NameRevenue);

  const navigation = useNavigation<AppNavigationProps>();

  const starRow = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleModal = () => {
    dispatch(openModal());
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
          {name === 'gabriel' ? (
            <RevenueListText>Macarrão de panela de pressão</RevenueListText>
          ) : name === 'clerisson' ? (
            <RevenueListText>Feijão tropeiro</RevenueListText>
          ) : name === 'aline' ? (
            <RevenueListText>Arroz carioca</RevenueListText>
          ) : null}
        </RevenueListContent>
        <IngredientsBox>
          <Title>Ingredientes</Title>
          <IngredientsContent>
            <ScrollView
              style={{width: '100%', padding: 5}}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}>
              {name === 'gabriel' ? (
                <IngredientsList>
                  • 500g de macarrão parafuso{'\n'}• 1kg de carne moída{'\n'}• 2
                  latas de tomate pelado{'\n'}• 1 cebola picada{'\n'}• 3 dentes
                  de alho picados{'\n'}• 2 cubos de caldo de carne{'\n'}• 2
                  colheres de sopa de óleo{'\n'}• Sal e pimenta-do-reino a gosto
                  {'\n'}• Água quente
                </IngredientsList>
              ) : name === 'clerisson' ? (
                <IngredientsList>
                  • 500g de feijão carioca{'\n'}• 250g de bacon em cubos{'\n'}•
                  200g de linguiça calabresa em cubos{'\n'}• 1 cebola picada
                  {'\n'}• 3 dentes de alho picados{'\n'}• 1 maço de couve picada
                  {'\n'}• 2 xícaras de farinha de mandioca{'\n'}• Sal e
                  pimenta-do-reino a gosto{'\n'}• Cheiro verde a gosto{'\n'}•
                  Óleo ou banha para refogar{'\n'}
                </IngredientsList>
              ) : name === 'aline' ? (
                <IngredientsList>
                  • 2 xícaras de arroz {'\n'}• 4 xícaras de água {'\n'}• 1
                  cebola picada {'\n'}• 2 dentes de alho picados {'\n'}• 1/2
                  pimentão picado {'\n'}• 1 tomate picado {'\n'}• 2 colheres de
                  sopa de óleo {'\n'}• Sal a gosto
                </IngredientsList>
              ) : null}
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
              {name === 'gabriel' ? (
                <PreparationMethodList>
                  • Em uma panela de pressão, aqueça 2 colheres de sopa de óleo
                  em fogo médio e refogue 1 cebola picada e 3 dentes de alho
                  picados até dourar.{'\n'}• Adicione 1kg de carne moída e
                  refogue até que esteja bem cozida.{'\n'}• Acrescente 2 latas
                  de tomate pelado, 2 cubos de caldo de carne, sal e
                  pimenta-do-reino a gosto. Misture bem.{'\n'}• Adicione água
                  quente até cobrir a carne. Tampe a panela de pressão e cozinhe
                  por cerca de 15 minutos após pegar pressão.{'\n'}• Desligue o
                  fogo e aguarde sair toda a pressão antes de abrir a panela.
                  {'\n'}• Adicione 500g de macarrão parafuso e misture bem.
                  Acrescente mais água quente se necessário, até cobrir o
                  macarrão.{'\n'}• Tampe a panela novamente e cozinhe por mais
                  10 minutos após pegar pressão.
                  {'\n'}• Desligue o fogo e aguarde sair toda a pressão antes de
                  abrir a panela.{'\n'}• Sirva quente.
                </PreparationMethodList>
              ) : name === 'clerisson' ? (
                <PreparationMethodList>
                  • Deixe o feijão de molho em água por cerca de 4 horas.{'\n'}•
                  Em uma panela de pressão, cozinhe o feijão em água com sal até
                  que esteja macio.{'\n'}• Escorra o feijão e reserve.{'\n'}• Em
                  uma frigideira, aqueça o óleo ou banha e frite o bacon e a
                  linguiça até que estejam dourados.{'\n'}• Adicione a cebola e
                  o alho e refogue até que estejam dourados.{'\n'}• Acrescente a
                  couve picada e refogue até que esteja macia.{'\n'}• Adicione o
                  feijão cozido e misture bem.{'\n'}• Adicione a farinha de
                  mandioca e misture até que esteja bem incorporada.{'\n'}•
                  Tempere com sal, pimenta-do-reino e cheiro verde a gosto.
                  {'\n'}• Sirva quente.
                </PreparationMethodList>
              ) : name === 'aline' ? (
                <PreparationMethodList>
                  • Lave 2 xícaras de arroz até que a água saia limpa e reserve.{' '}
                  {'\n'}• Em uma panela, aqueça 2 colheres de sopa de óleo em
                  fogo médio e refogue 1 cebola picada, 3 dentes de alho picados
                  e 1 pimentão picado até que estejam macios. {'\n'}• Acrescente
                  2 tomates picados e refogue por mais alguns minutos. {'\n'}•
                  Adicione o arroz e misture bem. {'\n'}• Adicione 4 xícaras de
                  água quente e o sal a gosto. Mexa bem e deixe cozinhar em fogo
                  médio até que a água comece a secar. {'\n'}• Baixe o fogo e
                  tampe a panela. {'\n'}• Deixe cozinhar por cerca de 15 minutos
                  ou até que o arroz esteja cozido e macio. {'\n'}• Desligue o
                  fogo e deixe descansar por cerca de 5 minutos. {'\n'}• Solte o
                  arroz com um garfo e sirva quente.
                </PreparationMethodList>
              ) : null}
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
      {isModalFeedBackOpen ? (
        <FeedBackAvaliation onClose={() => navigation.navigate('OngHome')} />
      ) : null}
    </Container>
  );
};

export {RevenueExplorerOng};
