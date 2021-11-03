import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  productList: [],
  productResponse: {},
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },
    fetchProductSuccess: (state, { payload }) => {
      state.isPending = false;
      state.productList = payload.products;
    },
    resFail: (state, { payload }) => {
      state.productResponse = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { resPending, fetchProductSuccess, resFail } = actions;
export default reducer;
