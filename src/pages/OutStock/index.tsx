import React from 'react';
import {FlatList} from 'react-native';

import {Container, OutStockContent, OutStockListText} from './styles';

import {BackButton} from '../../components/Buttons/BackButton';

import {OutStockList} from '../../components/OutStockList';

import outStockOng from '../../../assets/outStockOng.png';
import NovaEsperanca from '../../../assets/NovaEsperanca.png';
import AmigodaVez from '../../../assets/AmigodaVez.png';

import {AppNavigationProps} from '../../routes';
import {useNavigation} from '@react-navigation/native';

interface IdataProps {
  id: string;
  name: string;
  foto: string;
}

const OutStock: React.FC = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const data: IdataProps[] = [
    {id: '1', name: 'Família Solidária', foto: outStockOng},
    {id: '2', name: 'Nova esperança', foto: NovaEsperanca},
    {id: '3', name: 'Amigo da vez', foto: AmigodaVez},
  ];

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
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <OutStockList key={item.id} data={item} />}
      />
    </Container>
  );
};

export {OutStock};
