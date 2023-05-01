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
}

interface RevenueData {
  data: RevenueDTO;
}

const RevenueList: React.FC<RevenueData> = ({data}) => {
  const navigation = useNavigation<AppNavigationProps>();

  const handleRevenueExplorer = () => {
    navigation.navigate('RevenueExplorer');
  };

  return (
    <Container>
      <RevenueTitle>{data.revenue}</RevenueTitle>
      <RevenuePeopleName>{data.name}</RevenuePeopleName>
      <ViewRevenue activeOpacity={1} onPress={() => handleRevenueExplorer()}>
        <Icon name="eye" size={35} color={THEME.colors.white} />
      </ViewRevenue>
    </Container>
  );
};

export {RevenueList};
