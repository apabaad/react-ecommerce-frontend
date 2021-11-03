import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  catList: [],
  catResponse: {},
};

const catSlice = createSlice({
  name: 'catSlice',
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },

    fetchCategoriesSuccess: (state, { payload }) => {
      state.isPending = false;
      state.catList = payload.categories;
    },
    resFail: (state, { payload }) => {
      state.isPending = false;
      state.catResponse = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { fetchCategoriesSuccess, resFail, resPending } = actions;

export default reducer;
