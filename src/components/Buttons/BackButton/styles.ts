import styled from 'styled-components/native';

import {THEME} from '../../../theme';

export const Container = styled.TouchableOpacity`
  width: 51px;
  height: 51px;
  background-color: ${THEME.colors.red};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;
