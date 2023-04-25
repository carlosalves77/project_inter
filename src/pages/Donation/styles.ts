import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const Header = styled.View`
  width: 126px;
  background-color: ${THEME.colors.red};
  border-radius: 37px;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const DonationListText = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${THEME.colors.white};
  font-weight: 800;
`;

export const DonationList = styled.View`
  width: 100%;
`;

export const ButtonContent = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
