import styled from 'styled-components/native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 77px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const FoodListContent = styled.View`
  width: 85%;
  height: 100%;
  border: 5px solid ${THEME.colors.red};
  border-radius: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const FoodListImageContainer = styled.View`
  width: 85px;
  height: 110%;
  justify-content: center;
  align-items: center;
  border: 5px solid ${THEME.colors.red};

  position: absolute;
  left: -2px;
  border-radius: 22px;
`;

export const FoodListImage = styled.Image`
  width: 100%;
  height: 67px;
  border-radius: 15px;
`;

export const FoodListInfoContent = styled.View`
  margin-right: 5px;
  flex-direction: row;
  align-items: center;
`;

export const FoodName = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(16)}px;
  font-weight: 800;
  color: ${THEME.colors.black};
`;

export const FoodDescription = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  color: ${THEME.colors.black};
  margin-right: 10px;
  margin-left: 2px;
`;

export const FoodQuantityValue = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: ${THEME.colors.red};
  justify-content: center;
  align-items: center;
`;

export const FoodQuantityValueText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(18)}px;
  font-weight: 800;
  color: ${THEME.colors.white};
`;
