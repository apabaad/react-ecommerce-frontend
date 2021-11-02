import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reqPending: false,
  catList: [],
  catResponse: {},
};

const catSlice = createSlice({
  name: 'catSlice',
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, { payload }) => {
      state.isPending = false;
      state.catList = payload.categories;
    },
    reqFail: (state, { payload }) => {
      state.isPending = false;
      state.catResponse = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { fetchCategoriesSuccess, reqFail } = actions;

export default reducer;
