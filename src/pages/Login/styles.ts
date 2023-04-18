import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${THEME.colors.background};
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export const LogoCard = styled.View`
  background-color: ${THEME.colors.red};
  width: 100%;
  height: 231px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 26px;
`;

export const LogoImage = styled.Image`
  width: 274px;
  height: 155px;
`;

export const Title = styled.Text`
  font-family: ${THEME.fonts.body};
  font-style: normal;
  font-weight: 800;
  font-size: ${RFValue(36)}px;
  line-height: 49px;
  color: rgba(0, 0, 0, 0.71);
  margin-bottom: 20px;
`;

export const UserTextInput = styled.TextInput`
  width: 95%;
  height: 62px;
  background-color: ${THEME.colors.white};
  border-radius: 21px;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ForgetPasswordContent = styled.View`
  width: 95%;
  align-items: flex-end;
  margin-top: 5px;
`;

export const ForgetPasswordButton = styled.TouchableOpacity``;

export const ForgetPasswordText = styled.Text`
  font-family: ${THEME.fonts.body};
  font-style: normal;
  font-weight: 800;
  font-size: ${RFValue(16)}px;
  line-height: 22px;
  color: ${THEME.colors.gray};
`;

export const NoAccountText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: ${THEME.colors.black};
  margin-top: 30px;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: ${THEME.colors.red};
`;
