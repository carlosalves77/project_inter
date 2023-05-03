import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  ScrollView,
  TextInputKeyPressEventData,
} from 'react-native';

import {
  ButtonContent,
  Container,
  RevenueListContent,
  RevenueListText,
  TextInput,
  Title,
} from './styles';

import {THEME} from '../../../theme';

import {BackButton} from '../../../components/Buttons/BackButton';
import {Button} from '../../../components/Buttons/Button';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../routes';

const RevenueList: React.FC = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation<AppNavigationProps>();

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    // Detecta se a tecla pressionada é a tecla "Enter"
    if (e.nativeEvent.key === 'Enter') {
      // Adiciona um ponto na nova linha
      console.log('aaaa');
      setText(text + '\n• ');
    }
  };

  return (
    <Container>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => handleBackButton()} />
        <RevenueListContent>
          <RevenueListText>Compartilhe sua receita</RevenueListText>
        </RevenueListContent>
        <Title
          placeholder="Titulo"
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={text => console.log(text)}
          autoCorrect={false}
        />
        <TextInput
          placeholder="ingredientes"
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={(value: string) => setText(value)}
          autoCorrect={false}
          value={text}
          multiline={true}
          textAlignVertical="top"
          onKeyPress={() => handleKeyPress}
        />
        <TextInput
          placeholder="Modo de preparo"
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={value => setText(value)}
          autoCorrect={false}
          multiline
          textAlignVertical="top"
        />
        <ButtonContent>
          <Button name="Enviar" />
        </ButtonContent>
      </ScrollView>
    </Container>
  );
};

export {RevenueList};
