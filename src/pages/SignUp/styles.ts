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
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-weight: 800;
  font-size: ${RFValue(40)}px;
  color: ${THEME.colors.lightGray};
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-style: normal;
  font-weight: 400;
  color: ${THEME.colors.lightGray};
  font-size: ${RFValue(18)}px;
  margin-bottom: 10px;
`;

export const UserTextInput = styled.TextInput`
  width: 95%;
  height: 62px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 8px;

  font-family: ${THEME.fonts.extraBold};
  font-weight: 800;
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const CustomButton = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 42px;
`;
