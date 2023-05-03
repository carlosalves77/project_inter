import React from 'react';
import {Container, BasketQuantity, BasketQuantityText, Basket} from './styles';

import {THEME} from '../../theme';

import Cart from '../../../assets/ShoppingCart.png';
import LinearGradient from 'react-native-linear-gradient';

import {useSelector} from 'react-redux';

interface ShoppingCartProps {
  onPress?: () => void;
  disabled?: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({onPress, disabled}) => {
  const {value} = useSelector((state: any) => state.listValue);

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Basket source={Cart} />
      {value.length ? (
        <BasketQuantity>
          <BasketQuantityText>{value.length}</BasketQuantityText>
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
