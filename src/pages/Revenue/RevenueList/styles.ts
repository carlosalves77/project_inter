import styled from 'styled-components/native';
import {Platform, TextInput as Input} from 'react-native';

import {THEME} from '../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const RevenueListContent = styled.View`
  width: 193px;
  height: 60px;
  background-color: ${THEME.colors.red};
  border-radius: 47px;
  align-items: center;
  justify-content: center;
  margin-bottom: 68px;
`;

export const RevenueListText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
  text-align: center;
`;

export const Title = styled(Input)`
  width: 95%;
  height: 62px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 0 16px;

  margin-bottom: 13px;

  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const TextInput = styled(Input)`
  width: 95%;
  height: 159px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 16px;
  margin-bottom: 13px;

  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const ButtonContent = styled.View`
  width: 65%;
  margin-top: 100px;
  margin-bottom: 50px;
`;
