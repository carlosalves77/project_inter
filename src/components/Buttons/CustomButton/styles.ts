import styled from 'styled-components/native';

import {TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & {
  background?: string;
  textColor?: string;
};

import {THEME} from '../../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs<Props>({})<Props>`
  width: 91px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  border-radius: 50px;
  padding: 10px;
`;

export const Text = styled.Text.attrs<Props>({})<Props>`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-size: ${RFValue(14)}px;
  color: ${props => props.textColor};
`;
