import React from 'react';
import {ScrollView} from 'react-native';

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
  const navigation = useNavigation<AppNavigationProps>();

  const handleBackButton = () => {
    navigation.goBack();
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
          onChangeText={text => console.log(text)}
          autoCorrect={false}
          multiline
          textAlignVertical="top"
        />
        <TextInput
          placeholder="Modo de preparo"
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={text => console.log(text)}
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
