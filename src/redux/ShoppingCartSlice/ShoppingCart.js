import { createSlice } from '@reduxjs/toolkit'
import { NFTTokens } from '../../helpers/tokensData';

const initialState = {
  nfts: NFTTokens,
  totalPrice: 0,
  amount: 0,
}

const ShoppingCartSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    clearCard : (state) => {
      state.nfts = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.nfts = state.nfts.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.nfts.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.nfts.find((item) => item.id === payload.id);
      if(cartItem.amount > 0) {
        cartItem.amount = cartItem.amount - 1;
      } 
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.nfts.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.value;
      });
      state.amount = amount;
      state.totalPrice = total;
    },
  },
})
export const { calculateTotals,clearCard ,decrease ,increase ,removeItem } =
  ShoppingCartSlice.actions
export default ShoppingCartSlice.reducer
