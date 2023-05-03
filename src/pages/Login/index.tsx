import React, {useEffect} from 'react';
import {
  StatusBar,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
} from 'react-native';

import Toast from 'react-native-toast-message';

import {
  Container,
  LogoCard,
  LogoImage,
  Title,
  UserTextInput,
  ForgetPasswordContent,
  ForgetPasswordText,
  ForgetPasswordButton,
  NoAccountText,
  CreateAccountButton,
  CreateAccountText,
  ShowAndHidePasswordButton,
  PasswordContent,
  Modal,
  ModalImage,
  TextInfoView,
  TextInfo,
  TextInfoDescription,
  ContainerCenter,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes/index';

import {Button} from '../../components/Buttons/Button';
import {ButtonModal} from '../../components/Buttons/ButtonModal';

import LoginLogo from '../../../assets/LoginLogo.png';
import welcomeFoodModal from '../../../assets/welcome-food.png';

import Icon from 'react-native-vector-icons/Feather';
import {THEME} from '../../theme';

type FormData = {
  user: string;
  password: string;
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Login: React.FC = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [modalLogin, setModalLogin] = React.useState(true);

  const [modalY] = React.useState(new Animated.Value(-deviceHeight));

  const navigation = useNavigation<AppNavigationProps>();

  useEffect(() => {}, [
    Animated.timing(modalY, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start(),
  ]);

  const closeModal = () => {
    Animated.timing(modalY, {
      duration: 500,
      toValue: -deviceHeight,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setModalLogin(false);
    }, 500);
  };

  const handleToastFail = () => {
    Toast.show({
      type: 'error',
      text1: 'Login ou senha inválido!',
    });
    console.log('Toast');
  };

  const handleLogin = async ({user, password}: FormData) => {
    try {
      setTimeout(() => {
        if (user === 'carlos' && password === '123') {
          return navigation.navigate('ChosePath');
        } else {
          handleToastFail();
          setIsLoading(false);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ContainerCenter>
      {modalLogin ? (
        <Animated.View
          style={[
            {width: deviceWidth, height: deviceHeight},
            {transform: [{translateY: modalY}]},
          ]}>
          <Modal>
            <StatusBar hidden />
            <ModalImage source={welcomeFoodModal} />
            <ButtonModal onPress={() => closeModal()} />
            <TextInfoView>
              <TextInfo>Bem Vindo</TextInfo>
              <TextInfoDescription>
                Doe com amor e ofereça{'\n'}um prato cheio de{'\n'}
                esperança!
              </TextInfoDescription>
            </TextInfoView>
          </Modal>
        </Animated.View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <KeyboardAvoidingView
            behavior={
              Platform.OS === 'ios' ? 'padding' : 'height'
            }></KeyboardAvoidingView>
          <Container>
            <StatusBar hidden />

            <LogoCard>
              <LogoImage source={LoginLogo} />
            </LogoCard>
            <Title>Olá, novamente!</Title>
            <UserTextInput
              placeholder="Usuário"
              placeholderTextColor={THEME.colors.placeHolder}
              keyboardType="default"
              onChangeText={text => setUser(text.replace(/\s/g, ''))}
              maxLength={12}
              editable={!isLoading}
              autoCorrect={false}
              value={user}
              underlineColorAndroid="transparent"
            />
            <PasswordContent>
              <UserTextInput
                placeholder="Senha"
                placeholderTextColor={THEME.colors.placeHolder}
                keyboardType="default"
                onChangeText={text => setPassword(text.replace(/\s/g, ''))}
                value={password}
                editable={!isLoading}
                secureTextEntry={!showPassword}
                maxLength={12}
                autoCorrect={false}
              />

              <ShowAndHidePasswordButton
                onPress={() => {
                  setShowPassword(!showPassword);
                }}>
                {showPassword ? (
                  <Icon name="eye" size={28} color={THEME.colors.placeHolder} />
                ) : (
                  <Icon
                    name="eye-off"
                    size={28}
                    color={THEME.colors.placeHolder}
                  />
                )}
              </ShowAndHidePasswordButton>
            </PasswordContent>
            <ForgetPasswordContent>
              <ForgetPasswordButton
                onPress={() => console.log('Forget Password')}>
                <ForgetPasswordText>Recuperar senha</ForgetPasswordText>
              </ForgetPasswordButton>
            </ForgetPasswordContent>
            <Button
              name="Entrar"
              onPress={() => handleLogin({user, password})}
              isLoading={isLoading}
            />
            <NoAccountText>Não pussui conta?</NoAccountText>
            <CreateAccountButton onPress={() => handleSignUp()}>
              <CreateAccountText>Cadastre-se agora</CreateAccountText>
            </CreateAccountButton>
          </Container>
          <Toast position="top" />
        </ScrollView>
      )}
    </ContainerCenter>
  );
};

export {Login};
