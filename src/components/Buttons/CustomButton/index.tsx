import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Text} from './styles';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  ...rest
}) => {
  return (
    <Container onPress={onPress} {...rest} background={backgroundColor}>
      <Text textColor={textColor}>{title}</Text>
    </Container>
  );
};

export {CustomButton};
