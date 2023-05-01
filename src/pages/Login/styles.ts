import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {THEME} from '../../theme';

import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const textPostion = windowHeight * 0.55;

export const ContainerCenter = styled.View`
  flex: 1;
`;

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
  font-family: ${THEME.fonts.extraBold};
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

  font-family: ${THEME.fonts.extraBold};
  font-size: ${RFValue(20)}px;
  text-decoration-line: none;
  color: ${THEME.colors.black};
`;

export const PasswordContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ForgetPasswordContent = styled.View`
  width: 95%;
  align-items: flex-end;
  margin-top: 5px;
`;

export const ForgetPasswordButton = styled.TouchableOpacity``;

export const ForgetPasswordText = styled.Text`
  font-family: ${THEME.fonts.bold};
  font-style: normal;
  font-size: ${RFValue(16)}px;
  line-height: 22px;
  color: ${THEME.colors.blackGray};
`;

export const NoAccountText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${THEME.colors.black};
  margin-top: 30px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-bottom: 15px;
`;

export const CreateAccountText = styled.Text`
  font-family: ${THEME.fonts.extraBold};
  font-style: normal;
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${THEME.colors.red};
`;

export const ShowAndHidePasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  top: 0;
  justify-content: center;
  margin-right: 20px;
`;

export const Modal = styled.View`
  flex: 1;
  background-color: ${THEME.colors.background};
  align-items: center;
`;

export const ModalImage = styled.Image`
  width: 100%;
  height: ${windowHeight * 0.85}px;
  border-bottom-left-radius: 58px;
  border-bottom-right-radius: 58px;
`;

export const TextInfoView = styled.View`
  position: absolute;
  top: ${textPostion}px;
  left: 24px;
`;

export const TextInfo = styled.Text`
  font-family: ${THEME.fonts.interExtraBold};
  font-style: normal;
  font-size: ${RFValue(35)}px;
  color: ${THEME.colors.white};
`;

export const TextInfoDescription = styled.Text`
  font-family: ${THEME.fonts.regular};
  font-style: normal;
  font-size: ${RFValue(24)}px;
  color: ${THEME.colors.white};
`;
