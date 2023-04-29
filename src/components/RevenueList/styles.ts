import styled from 'styled-components/native';
import {Platform, TouchableOpacity} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 89px;
  background-color: ${THEME.colors.red};
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const RevenueTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${THEME.fonts.extraBold};
  color: ${THEME.colors.white};
  font-weight: 800;
`;

export const RevenuePeopleName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${THEME.fonts.medium};
  color: ${THEME.colors.white};
`;

export const ViewRevenue = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10%;
  background-color: ${THEME.colors.red};
  position: absolute;
  bottom: -40%;
  z-index: -1;
`;
