import styled from 'styled-components/native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: ${THEME.colors.red};
  align-items: center;
  justify-content: center;
`;

export const Basket = styled.Image``;

export const BasketQuantity = styled.View`
  position: absolute;
  border-radius: 50px;
  width: 22px;
  height: 22px;
  background-color: ${THEME.colors.white};
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const BasketQuantityText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(12)}px;
  color: ${THEME.colors.black};
  text-align: center;
`;
