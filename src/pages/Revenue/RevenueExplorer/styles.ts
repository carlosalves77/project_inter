import styled from 'styled-components/native';
import {Platform} from 'react-native';

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
  height: 55px;
  padding: 10px;
  background-color: ${THEME.colors.red};
  border-radius: 47px;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
`;

export const RevenueListText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
  text-align: center;
  line-height: 20px;
`;

export const IngredientsBox = styled.View`
  width: 95%;
  height: 237px;
  background-color: ${THEME.colors.red};
  border-radius: 25px;
  padding: 20px;
`;

export const PreparationMethodBox = styled.View`
  width: 95%;
  height: 237px;
  background-color: ${THEME.colors.red};
  border-radius: 25px;
  padding: 20px;
  margin-top: 31px;
`;

export const Title = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(22)}px;
  color: ${THEME.colors.white};
  align-self: center;
`;

export const IngredientsContent = styled.View`
  flex: 1;
`;

export const PreparationContent = styled.View`
  flex: 1;
`;

export const IngredientsList = styled.Text`
  flex: 1;
  flex-wrap: wrap;

  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.white};
  margin-bottom: 20px;
`;

export const PreparationMethodList = styled.Text`
  flex: 1;
  flex-wrap: wrap;

  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${THEME.colors.white};
  margin-bottom: 20px;
`;

export const AvalibleContent = styled.TouchableOpacity`
  width: 65%;
  margin-top: 44px;
  margin-bottom: 50;
  align-items: center;
`;

export const AvalibleText = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.red};
`;

export const StarsContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
