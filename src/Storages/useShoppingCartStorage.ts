import {create} from 'zustand';

type ShoppingCartType = {
  cart: number[];
};

type ShoppingCart = {
  value: ShoppingCartType;
  addCartItem: (item: number) => void;
};

const useShoppingCartStorage = create<ShoppingCart>(set => ({
  value: {
    cart: [],
  },
  addCartItem: (item: number) => {
    set(state => ({value: {cart: [...state.value.cart, item]}}));
  },
}));

export default useShoppingCartStorage;
