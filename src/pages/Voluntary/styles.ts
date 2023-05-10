import styled from 'styled-components/native';
import {Platform, TextInput as Input} from 'react-native';

import {THEME} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  margin-bottom: 20px;
`;

export const VoluntaryContent = styled.View`
  width: 193px;
  height: 60px;
  background-color: ${THEME.colors.red};
  border-radius: 37px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 27px;
`;

export const VoluntaryListText = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.white};
`;

export const VoluntaryText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  color: ${THEME.colors.lightGray};
  text-align: center;
  margin-bottom: 28px;
  line-height: 25px;
`;

export const TextInput = styled(Input)`
  width: 95%;
  height: 159px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 16px;
  margin-top: 10px;
  margin-bottom: 24px;

  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const TimeInformation = styled.View`
  width: 85%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TimeInformationText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.black};
  line-height: 22px;
`;

export const TimeButton = styled.TouchableOpacity`
  width: 149px;
  height: 53px;
  background-color: ${THEME.colors.red};
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const TimeButtonText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(26)}px;
  color: ${THEME.colors.white};
`;

export const TextInputAtuation = styled(Input)`
  width: 95%;
  height: 47px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 0 16px;
  margin-top: 10px;

  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const ButtonContent = styled.View`
  margin-bottom: 24px;
  width: 95%;
  align-items: center;
  justify-content: center;
`;
