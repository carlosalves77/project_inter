import styled, {css} from 'styled-components/native';

import {THEME} from '../../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 95%;
  height: 62px;
  background-color: ${THEME.colors.red};
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  margin-top: 31px;
`;

export const Title = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
`;
