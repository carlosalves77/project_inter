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

const OutStockList: React.FC = () => {
  const [onOpen, setOnOpen] = React.useState(false);
  const [outStockList, setOutStockList] = React.useState([]);

  useEffect(() => {
    const fetchOutStockList = async () => {
      try {
        const response = await api.get('/foods');
        const data = response.data;
        setOutStockList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOutStockList();
  }, []);

  const handleOnOpen = () => {
    setOnOpen(!onOpen);
  };

  return (
    <MainContent>
      <Content onPress={() => handleOnOpen()}>
        <ImageContent>
          <Image source={OutStock} />
        </ImageContent>
        <ContentTitle>
          <Title>Família Solidária</Title>
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
          <DonateButton>
            <DonateText>Doar</DonateText>
          </DonateButton>
        </OnOpenContainer>
      ) : null}
    </MainContent>
  );
};

export {OutStockList};
