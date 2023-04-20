import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${THEME.colors.background};
`;
