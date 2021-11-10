import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    updateCart: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { updateCart } = actions;
export default reducer;
