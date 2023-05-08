import React from 'react';

import {
  Container,
  RevenuePeopleName,
  RevenueTitle,
  ViewRevenue,
} from './styles';

import {THEME} from '../../theme';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

interface RevenueDTO {
  id: string;
  revenue: string;
  name: string;
  nameParams: string;
}

interface RevenueData {
  data: RevenueDTO;
}

const RevenueListOng: React.FC<RevenueData> = ({data}) => {
  const navigation = useNavigation<AppNavigationProps>();

  const handleRevenueExplorer = () => {
    navigation.navigate('RevenueExplorerOng', {NameParamas: data.nameParams});
  };

  return (
    <Container>
      <RevenueTitle>{data.name}</RevenueTitle>
      <RevenuePeopleName>{data.revenue}</RevenuePeopleName>
      <ViewRevenue activeOpacity={1} onPress={() => handleRevenueExplorer()}>
        <Icon name="eye" size={35} color={THEME.colors.white} />
      </ViewRevenue>
    </Container>
  );
};

export {RevenueListOng};
