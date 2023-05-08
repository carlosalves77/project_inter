import React from 'react';

import {
  Container,
  Content,
  ContentList,
  ContentTitle,
  DonateButton,
  DonateText,
  Header,
  HeaderTitle,
  ImageContent,
  MainContent,
  OnOpenContainer,
  SubTitle,
  Title,
  Image,
  ItensText,
  ItensList,
  Itens,
  DeliveryOptionContent,
} from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';
import {BackButton} from '../../components/Buttons/BackButton';
import {useDispatch} from 'react-redux';
import {openModal} from '../../redux/useDonationSucess';

interface IOutStockListDto {
  id: string;
  name: string;
  foto: string;
}
interface OutStockListProps {
  data: IOutStockListDto;
}

interface MyParams {
  Name: string;
}

const DonationCloses: React.FC<OutStockListProps> = () => {
  const [onOpen] = React.useState(true);
  const dispatch = useDispatch();

  const route = useRoute();

  const myFeedBack = (route.params as MyParams)?.Name;

  const [name] = React.useState(myFeedBack);

  const navigation = useNavigation<AppNavigationProps>();

  const handleDonate = () => {
    navigation.navigate('OngHome');
    dispatch(openModal());
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={() => handleGoBack()} />
      <Header>
        <HeaderTitle>Doadores mais{'\n'}próximos</HeaderTitle>
      </Header>
      {name === 'gabriel' ? (
        <MainContent>
          <Content disabled>
            <ImageContent>
              <Image source={{uri: 'https://i.ibb.co/TmtRqkJ/Macarr-o.png'}} />
            </ImageContent>
            <ContentTitle>
              <Title>Gabriel Monteiro</Title>
              <SubTitle>Macarrão 500g, Feijão 1kg...</SubTitle>
            </ContentTitle>
          </Content>
          {onOpen ? (
            <OnOpenContainer>
              <ContentList>
                {/* {TODO} */}
                <Itens>
                  <ItensText>
                    Endereço:{' '}
                    <ItensList>
                      Praça Severina{'\n'}Rita Coelho, 20 - Recife - PE
                    </ItensList>
                  </ItensText>
                </Itens>
                <Itens>
                  <ItensText>Itens:</ItensText>
                  <ItensList>• 1X Macarrão 500g,</ItensList>
                  <ItensList>• 1X Feijão 1kg,</ItensList>
                  <ItensList>• 2X Leite integral 1L,</ItensList>
                  <ItensList>• 2X Creme Cracker 500g,</ItensList>
                  <ItensList>• 1x Oléo 1L.</ItensList>
                </Itens>
                <DeliveryOptionContent>
                  <ItensText>Opção de entrega:</ItensText>
                  <ItensList>Retirada na residência.</ItensList>
                </DeliveryOptionContent>
              </ContentList>
            </OnOpenContainer>
          ) : null}
        </MainContent>
      ) : name === 'matheus' ? (
        <MainContent>
          <Content disabled>
            <ImageContent>
              <Image source={{uri: 'https://i.ibb.co/9r1gq4z/Arroz.png'}} />
            </ImageContent>
            <ContentTitle>
              <Title>Matheus Reis</Title>
              <SubTitle>Arroz 1kg, Leite 1L, Feijão 1kg...</SubTitle>
            </ContentTitle>
          </Content>
          {onOpen ? (
            <OnOpenContainer>
              <ContentList>
                <Itens>
                  <ItensText>
                    Endereço:{' '}
                    <ItensList>
                      Rua Frei Caneca,{'\n'}210 - Recife - PE
                    </ItensList>
                  </ItensText>
                </Itens>
                <Itens>
                  <ItensText>Itens:</ItensText>
                  <ItensList>• 1X Arroz 1kg,</ItensList>
                  <ItensList>• 1X Feijão 1kg,</ItensList>
                  <ItensList>• 2X Leite integral 1L,</ItensList>
                  <ItensList>• 2X Pão de forma int.. 500g,</ItensList>
                  <ItensList>• 1X Azeite 500ml.</ItensList>
                </Itens>
                <DeliveryOptionContent>
                  <ItensText>Opção de entrega:</ItensText>
                  <ItensList>Retirada na residência.</ItensList>
                </DeliveryOptionContent>
              </ContentList>
            </OnOpenContainer>
          ) : null}
        </MainContent>
      ) : name === 'clerisson' ? (
        <MainContent>
          <Content disabled>
            <ImageContent>
              <Image source={{uri: 'https://i.ibb.co/hyL9NWQ/Feij-o.png'}} />
            </ImageContent>
            <ContentTitle>
              <Title>Clerisson Lins</Title>
              <SubTitle>Feijão 1kg, Arroz 1kg, Macarrão 500g...</SubTitle>
            </ContentTitle>
          </Content>
          {onOpen ? (
            <OnOpenContainer>
              <ContentList>
                <Itens>
                  <ItensText>
                    Endereço:{' '}
                    <ItensList>
                      Rua Dom Bosco, 235 - Boa Vista, Recife - PE
                    </ItensList>
                  </ItensText>
                </Itens>
                <Itens>
                  <ItensText>Itens:</ItensText>
                  <ItensList>• 1X Arroz 1kg,</ItensList>
                  <ItensList>• 1X Feijão 1kg,</ItensList>
                  <ItensList>• 2X Leite integral 1L,</ItensList>
                  <ItensList>• 2X Biscoito recheado 140g,</ItensList>
                  <ItensList>• 1X Óleo de girassol 900ml.</ItensList>
                </Itens>
                <DeliveryOptionContent>
                  <ItensText>Opção de entrega:</ItensText>
                  <ItensList>Retirada na residência.</ItensList>
                </DeliveryOptionContent>
              </ContentList>
            </OnOpenContainer>
          ) : null}
        </MainContent>
      ) : null}
      <DonateButton onPress={() => handleDonate()}>
        <DonateText>Aceitar doação</DonateText>
      </DonateButton>
    </Container>
  );
};

export {DonationCloses};
