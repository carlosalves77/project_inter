import React from 'react';
import {Container, Title} from './styles';

import {ActivityIndicator} from 'react-native';

import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  name,
  isLoading,
  disabled,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Title>{name}</Title>
      )}
    </Container>
  );
};

export {Button};
