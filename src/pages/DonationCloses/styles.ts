import styled from 'styled-components/native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';
import {Platform, TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${THEME.colors.red};
  align-items: center;
  justify-content: center;
  border-radius: 47px;
  padding: 8px;
  width: 50%;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${THEME.fonts.extraBold};
  color: ${THEME.colors.white};
  text-align: center;
`;

export const MainContent = styled.View`
  width: 100%;
  margin-bottom: 28%;
  margin-top: 40px;
`;

export const OnOpenContainer = styled.View`
  width: 100%;
  height: 450px;
  align-items: center;
  border-radius: 45px;
  border: 10px solid ${THEME.colors.red};
  z-index: 1;
  justify-content: center;
`;

export const Content = styled(TouchableOpacity).attrs(props => ({
  activeOpacity: 1,
}))`
  height: 78px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${THEME.colors.red};
  border-radius: 43px;
  z-index: 9999;
  position: absolute;
`;

export const ImageContent = styled.View`
  width: 78px;
  height: 78px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 50px;
`;

export const ContentTitle = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${THEME.fonts.extraBold};
  color: ${THEME.colors.white};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${THEME.fonts.regular};
  color: ${THEME.colors.white};
`;

export const ContentList = styled.View`
  height: 60%;
  width: 90%;
  padding: 10px;
`;

export const Itens = styled.View`
  margin-bottom: 10px;
`;

export const DeliveryOptionContent = styled.View`
  align-self: center;
`;

export const ItensText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${THEME.fonts.extraBold};
  color: ${THEME.colors.blackGray};
`;

export const ItensList = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${THEME.fonts.regular};
  color: ${THEME.colors.blackGray};
`;

export const DonateButton = styled.TouchableOpacity`
  width: 50%;
  height: 51px;
  background-color: ${THEME.colors.red};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
`;

export const DonateText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${THEME.fonts.regular};
  color: ${THEME.colors.white};
`;
