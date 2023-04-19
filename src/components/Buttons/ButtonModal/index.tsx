import React from 'react';
import {Container} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
  onPress: () => void;
}

const ButtonModal: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <Container onPress={() => onPress()}>
      <Icon name="arrow-right" size={30} color="#fff" />
    </Container>
  );
};

export {ButtonModal};
