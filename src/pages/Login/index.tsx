import React, {useEffect} from 'react';
import {
  StatusBar,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  ToastAndroid,
  View,
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
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes/index';

import {Button} from '../../components/Buttons/Button';
import {ButtonModal} from '../../components/Buttons/ButtonModal';

import LoginLogo from '../../../assets/LoginLogo.png';
import welcomeFoodModal from '../../../assets/welcome-food.png';

import Icon from 'react-native-vector-icons/Feather';

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

  const handleToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'Login efetuado com sucesso!',
    });
    console.log('Toast');
  };

  const handleLogin = async (user: string, password: string) => {
    try {
      if (user === 'carlos' && password === '123') {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
        handleToast();
        return navigation.navigate('Home');
      } else {
        ToastAndroid.showWithGravity(
          'Falha ao efetuar o login',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
        setIsLoading(false);
      }
    } catch {
      console.log('Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
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

            <Toast position="top" />
            <LogoCard>
              <LogoImage source={LoginLogo} />
            </LogoCard>
            <Title>Olá, novamente!</Title>
            <UserTextInput
              placeholder="Usuário"
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
                style={{}}
                placeholder="Senha"
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
                  <Icon name="eye" size={28} />
                ) : (
                  <Icon name="eye-off" size={28} />
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
              onPress={() => handleLogin(user, password)}
              isLoading={isLoading}
            />
            <NoAccountText>Não pussui conta?</NoAccountText>
            <CreateAccountButton onPress={() => handleSignUp()}>
              <CreateAccountText>Cadastre-se agora</CreateAccountText>
            </CreateAccountButton>
          </Container>
        </ScrollView>
      )}
    </View>
  );
};

export {Login};
