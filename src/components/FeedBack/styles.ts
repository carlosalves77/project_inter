import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.SafeAreaView`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export const FeedBackCard = styled.View`
  width: 324px;
  height: 512px;
  background-color: ${THEME.colors.red};
  border-radius: 36px;
  align-items: center;
  justify-content: center;
`;

export const FeedBackCardTitle = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-weight: 900;
  font-size: ${RFValue(36)}px;
  color: ${THEME.colors.white};
  margin-top: 42px;
`;

export const FeedBackCardText = styled.Text`
  font-family: ${THEME.fonts.medium};
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${THEME.colors.white};
  text-align: center;
  margin-top: 45px;
`;

export const FeedBackContentStars = styled.View`
  width: 70%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  flex-direction: row;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: ${THEME.colors.white};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
`;
