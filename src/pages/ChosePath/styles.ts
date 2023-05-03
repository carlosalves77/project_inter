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
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.black};
  font-family: ${THEME.fonts.extraBold};
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 83px;
  background-color: ${THEME.colors.red};
  border-radius: 38px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(34)}px;
  color: ${THEME.colors.white};
  font-family: ${THEME.fonts.extraBold};
`;
