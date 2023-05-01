import React from 'react';
import {Container, BasketQuantity, BasketQuantityText, Basket} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../../../assets/ShoppingCart.png';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../theme';

interface ShoppingCartProps {
  onPress?: () => void;
  disabled?: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({onPress, disabled}) => {
  const [quantity, setQuantity] = React.useState(2);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Basket source={Cart} />
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
