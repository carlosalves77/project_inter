import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
`;

export const TopViewStyle = styled.View`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  background-color: ${THEME.colors.red};
`;

export const BottomViewStyle = styled.View`
  width: 100%;
  height: 57px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: ${THEME.colors.red};

  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.45);
`;

export const BottomViewStyleText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-size: ${RFValue(25)}px;
  color: ${THEME.colors.white};
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 74px;
  height: 44px;
  background-color: ${THEME.colors.red};
  border-radius: 23px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  align-self: center;
  margin-bottom: 10px;
`;

export const TextAndShoppingCart = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
`;

export const TextContent = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-style: normal;
  font-size: ${RFValue(20)}px;
  color: ${THEME.colors.lightGray};
`;

export const Name = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-size: ${RFValue(25)}px;
  color: ${THEME.colors.blackGray};
`;

export const MapContent = styled.View`
  width: 100%;
  height: 348px;
  background-color: red;
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardOptions = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  width: 96px;
  height: 81px;
`;

export const CardImage = styled.Image`
  width: 96px;
  height: 81px;
`;
