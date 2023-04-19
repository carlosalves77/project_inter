import {Container, Title} from './styles';

interface ButtonProps {
  onPress: () => void;
}

const Button = ({onPress}: ButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Title>Entrar</Title>
    </Container>
  );
};

export {Button};
