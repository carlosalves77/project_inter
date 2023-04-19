import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  ToastAndroid,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

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

import LinearGradient from 'react-native-linear-gradient';

import {Button} from '../../components/Buttons/Button';
import {ButtonModal} from '../../components/Buttons/ButtonModal';

import LoginLogo from '../../../assets/LoginLogo.png';
import welcomeFoodModal from '../../../assets/welcome-food.png';

import Icon from 'react-native-vector-icons/Feather';

const Login: React.FC = ({}) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(true);

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [400, -0],
        }),
      },
    ],
  };

  const handleLogin = async (user: string, password: string) => {
    try {
      if (user === 'carlos' && password === '123456') {
        ToastAndroid.showWithGravity(
          'Login realizado com sucesso',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Falha ao efetuar o login',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }
    } catch {
      console.log('Erro ao fazer login');
    }
  };

  return (
    <View>
      {modalLogin ? (
        <Animated.View style={[animatedStyle]}>
          <Modal>
            <StatusBar hidden />
            <ModalImage source={welcomeFoodModal} />
            <ButtonModal onPress={() => setModalLogin(false)} />
            <TextInfoView>
              <TextInfo>Bem Vindo</TextInfo>
              <TextInfoDescription>
                Doe com amor e ofereça{'\n'}um prato cheio de{'\n'}esperança!
              </TextInfoDescription>
            </TextInfoView>
            <LinearGradient
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '50%',
                borderRadius: 14,
                zIndex: 1,
                backgroundColor: 'transparent',
              }}
              colors={['transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.90)']}
            />
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
              keyboardType="default"
              onChangeText={text => setUser(text.replace(/\s/g, ''))}
              maxLength={12}
              autoCorrect={false}
              value={user}
            />
            <PasswordContent>
              <UserTextInput
                style={{}}
                placeholder="Senha"
                keyboardType="default"
                onChangeText={text => setPassword(text.replace(/\s/g, ''))}
                value={password}
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
            <Button onPress={() => handleLogin(user, password)} />
            <NoAccountText>Não pussui conta?</NoAccountText>
            <CreateAccountButton
              onPress={() => console.log('Create a account')}>
              <CreateAccountText>Cadastre-se agora</CreateAccountText>
            </CreateAccountButton>
          </Container>
        </ScrollView>
      )}
    </View>
    //     <ScrollView
    //       showsVerticalScrollIndicator={false}
    //       contentContainerStyle={{flexGrow: 1}}>
    //       <KeyboardAvoidingView
    //         behavior={
    //           Platform.OS === 'ios' ? 'padding' : 'height'
    //         }></KeyboardAvoidingView>
    //       <Container>
    //         <StatusBar hidden />

    //         <LogoCard>
    //           <LogoImage source={LoginLogo} />
    //         </LogoCard>
    //         <Title>Olá, novamente!</Title>
    //         <UserTextInput
    //           placeholder="Usuário"
    //           keyboardType="default"
    //           onChangeText={text => setUser(text.replace(/\s/g, ''))}
    //           maxLength={12}
    //           autoCorrect={false}
    //           value={user}
    //         />
    //         <PasswordContent>
    //           <UserTextInput
    //             style={{}}
    //             placeholder="Senha"
    //             keyboardType="default"
    //             onChangeText={text => setPassword(text.replace(/\s/g, ''))}
    //             value={password}
    //             secureTextEntry={!showPassword}
    //             maxLength={12}
    //             autoCorrect={false}
    //           />

    //           <ShowAndHidePasswordButton
    //             onPress={() => {
    //               setShowPassword(!showPassword);
    //             }}>
    //             {showPassword ? (
    //               <Icon name="eye" size={28} />
    //             ) : (
    //               <Icon name="eye-off" size={28} />
    //             )}
    //           </ShowAndHidePasswordButton>
    //         </PasswordContent>
    //         <ForgetPasswordContent>
    //           <ForgetPasswordButton onPress={() => console.log('Forget Password')}>
    //             <ForgetPasswordText>Recuperar senha</ForgetPasswordText>
    //           </ForgetPasswordButton>
    //         </ForgetPasswordContent>
    //         <Button onPress={() => handleLogin(user, password)} />
    //         <NoAccountText>Não pussui conta?</NoAccountText>
    //         <CreateAccountButton onPress={() => console.log('Create a account')}>
    //           <CreateAccountText>Cadastre-se agora</CreateAccountText>
    //         </CreateAccountButton>
    //       </Container>
    //     </ScrollView>
  );
};

export {Login};
