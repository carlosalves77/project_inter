import React from 'react';

import {
  Container,
  RevenuePeopleName,
  RevenueTitle,
  ViewRevenue,
} from './styles';

import {THEME} from '../../theme';

import Icon from 'react-native-vector-icons/Feather';

interface RevenueDTO {
  id: string;
  revenue: string;
  name: string;
}

interface RevenueData {
  data: RevenueDTO;
}

const RevenueList: React.FC<RevenueData> = ({data}) => {
  return (
    <Container>
      <RevenueTitle>{data.revenue}</RevenueTitle>
      <RevenuePeopleName>{data.name}</RevenuePeopleName>
      <ViewRevenue activeOpacity={1}>
        <Icon name="eye" size={35} color={THEME.colors.white} />
      </ViewRevenue>
    </Container>
  );
};

export {RevenueList};
