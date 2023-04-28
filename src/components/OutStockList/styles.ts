import styled from 'styled-components/native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const MainContent = styled.View`
  width: 100%;
  margin-bottom: 28%;
`;

export const OnOpenContainer = styled.View`
  width: 100%;
  height: 552px;
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
`;

export const Image = styled.Image`
  width: 78px;
  height: 78px;
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
  font-family: ${THEME.fonts.extraBold};
  color: ${THEME.colors.white};
`;
