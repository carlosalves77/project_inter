import React from 'react';
import {Container} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <Container onPress={() => onPress()}>
      <Icon name="arrow-left" size={24} color="#fff" />
    </Container>
  );
};

export {BackButton};
