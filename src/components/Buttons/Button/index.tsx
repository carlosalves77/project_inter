import React from 'react';
import {Container, Title} from './styles';

import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  name: string;
  onPress?: () => void;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({onPress, name, isLoading}) => {
  return (
    <Container onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Title>{name}</Title>
      )}
    </Container>
  );
};

export {Button};
