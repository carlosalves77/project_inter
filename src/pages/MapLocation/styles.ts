import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const BackButton = styled.View`
  position: absolute;
  top: ${RFValue(Platform.OS === 'ios' ? 60 : 40)}px;
  left: 10%;
  z-index: 999;
`;

export const IconContainer = styled.View`
  width: 100px;
  height: 32px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const IconContent = styled.View`
  width: 100px;
  height: 6px;
  background-color: #ccc;
  border-radius: 10px;
`;

export const OngTitle = styled.Text`
  color: ${THEME.colors.red};
  font-size: ${RFValue(22)}px;
  font-family: ${THEME.fonts.extraBold};
  margin-bottom: 15px;
`;

export const OngContainer = styled.TouchableOpacity`
  width: 90%;
  height: 78px;
  align-items: center;
  justify-content: space-between;
  border-radius: 45px;
  background-color: ${THEME.colors.red};
  flex-direction: row;
  margin-bottom: 25px;
`;

export const OngImg = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-left: 5px;
`;

export const OngInfo = styled.View``;

export const OngTitleContent = styled.Text`
  color: ${THEME.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${THEME.fonts.extraBold};
`;

export const OngInfoText = styled.Text`
  color: ${THEME.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${THEME.fonts.regular};
`;

export const OngDistanceContent = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: ${THEME.colors.white};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const OngDistanceText = styled.Text`
  color: ${THEME.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${THEME.fonts.regular};
`;

export const ContentMarker = styled.View`
  height: 100px;
  width: 70px;
`;

export const Balon = styled.View`
  height: 70px;
  width: 70px;
  align-items: center;
`;

export const ImgOng = styled.Image`
  width: 44px;
  height: 44px;
`;

export const ImgUser = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 50px;
`;
