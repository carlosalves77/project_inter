import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';

import {
  Content,
  ContentList,
  ContentTitle,
  DonateButton,
  DonateText,
  Image,
  ImageContent,
  MainContent,
  OnOpenContainer,
  SubTitle,
  Title,
} from './styles';

import OutStock from '../../../assets/outStockOng.png';

import {OutStockFoodList} from '../OutStockFoodList';
import api from '../../services/api/api';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

interface IOutStockListDto {
  id: string;
  name: string;
  foto: string;
}
interface OutStockListProps {
  data: IOutStockListDto;
}

const OutStockList: React.FC<OutStockListProps> = ({data}) => {
  const [onOpen, setOnOpen] = React.useState(false);

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

  const [outStockList] = React.useState(foods);

  const handleOnOpen = () => {
    setOnOpen(!onOpen);
  };

  const handleDonate = () => {
    navigation.navigate('Home', {feedBack: true});
  };

  return (
    <MainContent>
      <Content onPress={() => handleOnOpen()}>
        <ImageContent>
          {/* @ts-ignore */}
          <Image source={data?.foto} />
        </ImageContent>
        <ContentTitle>
          <Title>{data.name}</Title>
          <SubTitle>Está com falta de estoque</SubTitle>
        </ContentTitle>
      </Content>
      {onOpen ? (
        <OnOpenContainer>
          <ContentList>
            <ScrollView
              style={{height: '20%'}}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}>
              {outStockList.map((item: any) => (
                <OutStockFoodList data={item} key={item} />
              ))}
            </ScrollView>
          </ContentList>
          <DonateButton onPress={() => handleDonate()}>
            <DonateText>Doar</DonateText>
          </DonateButton>
        </OnOpenContainer>
      ) : null}
    </MainContent>
  );
};

export {OutStockList};
