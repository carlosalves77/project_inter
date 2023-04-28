import React from 'react';
import {Container, Title} from './styles';

import {ActivityIndicator} from 'react-native';

import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  onPress?: () => void;
  isLoading?: boolean;
  size?: boolean;
}

const Button: React.FC<ButtonProps> = ({onPress, name, isLoading, size}) => {
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
