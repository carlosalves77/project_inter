import React from 'react';
import {Container, BasketQuantity, BasketQuantityText} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../theme';

interface ShoppingCartProps {
  onPress?: () => void;
  disabled?: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({onPress, disabled}) => {
  const [quantity, setQuantity] = React.useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Icon name="basket-check" size={26} color="#fff" />
      {quantity ? (
        <BasketQuantity>
          <BasketQuantityText>{quantity}</BasketQuantityText>
        </BasketQuantity>
      ) : null}
      <LinearGradient
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 14,
          zIndex: 1,
          backgroundColor: 'transparent',
        }}
        colors={['transparent', THEME.colors.white, THEME.colors.white]}
      />
    </Container>
  );
};

export {ShoppingCart};
