import {
  StatusBar,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
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
} from './styles';

import {Button} from '../../components/Button';
import LoginLogo from '../../assets/LoginLogo.png';

export function Login() {
  return (
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
        <UserTextInput placeholder="Usuário" />
        <UserTextInput placeholder="Senha" />
        <ForgetPasswordContent>
          <ForgetPasswordButton onPress={() => console.log('Forget Password')}>
            <ForgetPasswordText>Recuperar senha</ForgetPasswordText>
          </ForgetPasswordButton>
        </ForgetPasswordContent>
        <Button onPress={() => console.log('Press')} />
        <NoAccountText>Não pussui conta?</NoAccountText>
        <CreateAccountButton onPress={() => console.log('Create a account')}>
          <CreateAccountText>Cadastre-se agora</CreateAccountText>
        </CreateAccountButton>
      </Container>
    </ScrollView>
  );
}
