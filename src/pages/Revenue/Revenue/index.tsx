import React from 'react';
import {FlatList, ScrollView, LogBox, View} from 'react-native';

LogBox.ignoreAllLogs();

import {
  Container,
  OutStockContent,
  OutStockListText,
  RevenueText,
  ShareButton,
  ShareButtonText,
} from './styles';

import {RevenueList} from '../../../components/RevenueList';
import {BackButton} from '../../../components/Buttons/BackButton';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../routes';

const Revenue: React.FC = () => {
  const data = [
    {
      id: '1',
      revenue: 'Macarrão de panela de pressão',
      name: 'Gabriel Monteiro',
    },
    {
      id: '2',
      revenue: 'Feijão tropeiro',
      name: 'Clerisson Lins',
    },
    {id: '3', revenue: 'Arroz carioca', name: 'Aline Oliveira'},
  ];
  const [revenue] = React.useState(data);

  const navigation = useNavigation<AppNavigationProps>();

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => handleBack()} />
        <OutStockContent>
          <OutStockListText>Livro de receitas</OutStockListText>
        </OutStockContent>
        <RevenueText>
          Compartilhe receitas baseadas{'\n'}nos alimentos doados,{'\n'}
          promovendo a sustentabilidade e{'\n'}a utilização total dos alimentos.
          {'\n'}As receitas devem ser{'\n'}compartilhadas de maneira clara
          {'\n'}e fácil de entender, e podem{'\n'}incluir instruções passo a
          passo e{'\n'}fotos dos pratos.
        </RevenueText>
        <FlatList
          style={{width: '100%', height: 300}}
          data={revenue}
          nestedScrollEnabled
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <RevenueList data={item} />}
        />
        <ShareButton onPress={() => navigation.navigate('RevenueList')}>
          <ShareButtonText>Compartilhe sua receita</ShareButtonText>
        </ShareButton>
      </ScrollView>
    </Container>
  );
};

export {Revenue};
