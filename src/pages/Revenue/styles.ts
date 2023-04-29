import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const OutStockContent = styled.View`
  width: 193px;
  height: 60px;
  background-color: ${THEME.colors.red};
  border-radius: 37px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 15px;
`;

export const OutStockListText = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.white};
  font-weight: 800;
`;

export const RevenueText = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-style: normal;
  font-size: ${RFValue(20)}px;
  color: ${THEME.colors.lightGray};
  font-weight: 800;
  text-align: center;
  margin-bottom: 28px;
`;

export const ShareButton = styled.TouchableOpacity`
  width: 70%;
  height: 61px;
  align-items: center;
  border-radius: 35px;
  justify-content: center;
  background-color: ${THEME.colors.white};
  margin-top: 33px;
  margin-bottom: 33px;
`;

export const ShareButtonText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-weight: 800;
  font-style: normal;
  font-size: ${RFValue(22)}px;
  color: ${THEME.colors.red};
  text-align: center;
`;
