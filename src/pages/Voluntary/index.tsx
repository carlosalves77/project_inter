import React, {useState} from 'react';
import {ScrollView, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import {
  ButtonContent,
  Container,
  TextInput,
  TextInputAtuation,
  TimeButton,
  TimeButtonText,
  TimeInformation,
  TimeInformationText,
  VoluntaryContent,
  VoluntaryListText,
  VoluntaryText,
} from './styles';

import {BackButton} from '../../components/Buttons/BackButton';

import {THEME} from '../../theme';

import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';
import {Button} from '../../components/Buttons/Button';

const Voluntary: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('time');
  const [text, setText] = useState('00:00');

  const navigation = useNavigation<AppNavigationProps>();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
    setText(currentDate.toString());

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    let fTime = `${hours}:${minutes}`;

    setText(fTime);

    console.log(fTime);
  };

  const showModeFe = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => handleBack()} />
        <VoluntaryContent>
          <VoluntaryListText>Voluntário</VoluntaryListText>
        </VoluntaryContent>
        <VoluntaryText>
          Se registrar como{'\n'}voluntários para ajudar na{'\n'}distribuição
          dos alimentos{'\n'}
          doados pelas{'\n'}organizações de caridade
        </VoluntaryText>
        <TextInput
          placeholder="Informe suas habilidades..."
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={text => console.log(text)}
          autoCorrect={false}
          multiline
          textAlignVertical="top"
        />
        <TextInput
          placeholder="Informe suas experiências..."
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={text => console.log(text)}
          autoCorrect={false}
          multiline
          textAlignVertical="top"
        />
        <TimeInformation>
          <TimeInformationText>
            Informe um{'\n'}horário para{'\n'}atuação
          </TimeInformationText>
          <TimeButton onPress={() => showModeFe('time')}>
            <TimeButtonText>{text}</TimeButtonText>
          </TimeButton>
        </TimeInformation>

        <TextInputAtuation
          placeholder="Informe o local de atuação"
          placeholderTextColor={THEME.colors.placeHolder}
          onChangeText={text => console.log(text)}
          autoCorrect={false}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            //@ts-ignore
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            positiveButton={{label: 'Ok', textColor: 'red'}}
            negativeButton={{label: 'Cancelar', textColor: 'red'}}
          />
        )}

        <ButtonContent>
          <Button
            name="Confirmar"
            onPress={() => navigation.navigate('Home')}
          />
        </ButtonContent>
      </ScrollView>
    </Container>
  );
};

export {Voluntary};
