import styled from 'styled-components/native';

import {THEME} from '../../../theme';

import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;
const buttonHeight = windowHeight * 0.8;

export const Container = styled.TouchableOpacity`
  width: 81px;
  height: 81px;
  background-color: ${THEME.colors.red};
  border-radius: 50px;
  z-index: 99999;
  position: absolute;
  top: ${buttonHeight}px;
  justify-content: center;
  align-items: center;
`;
