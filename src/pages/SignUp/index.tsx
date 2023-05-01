import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {
  Container,
  UserTextInput,
  Title,
  SubTitle,
  CustomButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';

import {BackButton} from '../../components/Buttons/BackButton';
import {Button} from '../../components/Buttons/Button';
import {CustomButton as ButtonCuston} from '../../components/Buttons/CustomButton';
import {THEME} from '../../theme';

const SignUp: React.FC = () => {
  const [formState, setFormState] = React.useState([
    {label: 'User', value: ''},
    {label: 'CNPJ', value: ''},
    {label: 'Email', value: ''},
    {label: 'Phone', value: ''},
    {label: 'Address', value: ''},
    {label: 'Password', value: ''},
    {label: 'Confirm Password', value: ''},
  ]);

  const [button1Active, setButton1Active] = React.useState(true);
  const [button2Active, setButton2Active] = React.useState(false);

  const navigation = useNavigation();

  const textInput = [
    'Nome',
    'CNPJ',
    'E-mail',
    'Telefone',
    'Endereço Físico',
    'Senha',
    'Confirmar Senha',
  ];

  const handleInputChange = (index: number, value: string) => {
    const updatedFormState = [...formState];
    updatedFormState[index].value = value;
    setFormState(updatedFormState);
  };

  const handleButton1Press = () => {
    setButton1Active(true);
    setButton2Active(false);
  };

  const handleButton2Press = () => {
    setButton2Active(true);
    setButton1Active(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView
        behavior={
          Platform.OS === 'ios' ? 'padding' : 'height'
        }></KeyboardAvoidingView>
      <Container>
        <BackButton onPress={() => navigation.goBack()} />
        <Title>Crie sua conta</Title>
        <SubTitle>Selecione um tipo de acesso</SubTitle>
        <CustomButton>
          <ButtonCuston
            title="Doador"
            onPress={() => handleButton1Press()}
            backgroundColor={
              button1Active ? THEME.colors.red : THEME.colors.white
            }
            textColor={button1Active ? THEME.colors.white : THEME.colors.red}
          />
          <ButtonCuston
            title="ONG"
            onPress={() => handleButton2Press()}
            backgroundColor={
              button2Active ? THEME.colors.red : THEME.colors.white
            }
            textColor={button2Active ? THEME.colors.white : THEME.colors.red}
          />
        </CustomButton>
        {button2Active
          ? textInput.map((item, index) => {
              return (
                <UserTextInput
                  key={index}
                  placeholder={item}
                  placeholderTextColor={THEME.colors.placeHolder}
                  onChangeText={value => handleInputChange(index, value)}
                />
              );
            })
          : textInput.map((item, index) => {
              if (index !== 1) {
                return (
                  <UserTextInput
                    key={index}
                    placeholder={item}
                    placeholderTextColor={THEME.colors.placeHolder}
                    onChangeText={value => handleInputChange(index, value)}
                  />
                );
              }
            })}
        <Button name="Cadastrar" isLoading={false} onPress={() => {}} />
      </Container>
    </ScrollView>
  );
};

export {SignUp};
