import React from 'react';
import {Container, BasketQuantity, BasketQuantityText} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../theme';

const ShoppingCart: React.FC = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Container>
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
