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
} from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';
import {BackButton} from '../../components/Buttons/BackButton';

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

  const route = useRoute();

  const myFeedBack = (route.params as MyParams)?.Name;

  const [name, setName] = React.useState(myFeedBack);

  const navigation = useNavigation<AppNavigationProps>();

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

  const handleDonate = () => {
    navigation.navigate('OngHome', {feedBack: true});
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
              <ContentList></ContentList>
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
              <ContentList></ContentList>
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
              <ContentList></ContentList>
            </OnOpenContainer>
          ) : null}
        </MainContent>
      ) : null}
      {/* <MainContent>
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
            <ContentList></ContentList>
          </OnOpenContainer>
        ) : null}
      </MainContent> */}
      <DonateButton onPress={() => handleDonate()}>
        <DonateText>Aceitar doação</DonateText>
      </DonateButton>
    </Container>
  );
};

export {DonationCloses};
