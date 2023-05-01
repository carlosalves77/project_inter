import React from 'react';
import {FlatList} from 'react-native';

import {Container, OutStockContent, OutStockListText} from './styles';

import {BackButton} from '../../components/Buttons/BackButton';

import {OutStockList} from '../../components/OutStockList';

import {AppNavigationProps} from '../../routes';
import {useNavigation} from '@react-navigation/native';

const OutStock: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const data: any = [{key: '1'}, {key: '2'}, {key: '3'}];

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <BackButton onPress={() => handleBack()} />
      <OutStockContent>
        <OutStockListText>Falta de estoque</OutStockListText>
      </OutStockContent>
      <FlatList
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.key}
        renderItem={({item}) => <OutStockList key={item.id} />}
      />
    </Container>
  );
};

export {OutStock};
