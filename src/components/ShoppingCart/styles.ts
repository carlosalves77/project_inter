import styled from 'styled-components/native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${THEME.colors.red};
  align-items: center;
  justify-content: center;
`;

export const BasketQuantity = styled.View`
  position: absolute;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: ${THEME.colors.white};
  bottom: 0;
  right: 0;
`;

export const BasketQuantityText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-weight: 900;
  font-size: ${RFValue(12)}px;
  color: ${THEME.colors.black};
  text-align: center;
`;
