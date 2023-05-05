import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {THEME} from '../../theme';

const {width, height} = Dimensions.get('screen');

export const Contaier = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: ${THEME.colors.red};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;
