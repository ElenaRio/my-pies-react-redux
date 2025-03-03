import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { CartItemProps, CartStateProps } from './types';


const cartData = getCartFromLocalStorage();

const initialState: CartStateProps = {
  totalPrice: cartData.totalPrice,
  items: cartData.items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemProps>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
