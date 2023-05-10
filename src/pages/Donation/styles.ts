import styled from 'styled-components/native';
import {Platform, TouchableOpacityProps} from 'react-native';

import {THEME} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = TouchableOpacityProps & {
  background?: string;
  textColor?: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${THEME.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DonationListContent = styled.View`
  width: 126px;
  height: 55px;
  background-color: ${THEME.colors.red};
  border-radius: 37px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const DonationListText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.white};
  text-align: center;
  line-height: 20px;
`;

export const DonationList = styled.View`
  width: 100%;
`;

export const ButtonContent = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const DonationTotalCard = styled.View`
  width: 305px;
  height: 449px;
  background-color: ${THEME.colors.red};
  border-radius: 34px;
  align-items: center;
  margin-top: 54px;
  padding-top: 45px;
`;

export const DonationTotalCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
`;

export const DonationTotalCardTitle = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${THEME.colors.white};
`;

export const DonationTotalCardText = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
  margin-left: 5px;
`;

export const DonationTotalCardCircle = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${THEME.colors.white};
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const DonationTotalCardCircleValue = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  color: ${THEME.colors.red};
`;

export const ButtonContentDonation = styled.TouchableOpacity`
  width: 45%;
  height: 62px;
  background-color: ${THEME.colors.red};
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 54px;
  align-self: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${THEME.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
`;

export const CloseOngsContent = styled.TouchableOpacity`
  width: 45%;
  height: 43px;
  background-color: ${THEME.colors.red};
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  align-self: center;
`;

export const ButtonOngTitle = styled.Text`
  font-family: ${THEME.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${THEME.colors.white};
  text-align: center;
  line-height: 16px;
`;

export const DonationTotalChosenCardContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 81px;
`;
export const DonationTotalChosenCard = styled.TouchableOpacity.attrs<Props>(
  {},
)<Props>`
  width: 119px;
  height: 67px;
  border-radius: 26px;
  background-color: ${props => props.background};
  align-items: center;
  justify-content: center;
`;

export const DonationTotalChosenCardTitle = styled.Text.attrs<Props>({})<Props>`
  font-family: ${THEME.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${props => props.textColor};
  text-align: center;
`;
