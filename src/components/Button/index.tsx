import {Container, Title} from './styles';

interface ButtonProps {
  onPress: () => void;
}

export function Button({onPress}: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Title>Entrar</Title>
    </Container>
  );
}
