import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resPending: true,
  userData: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    registrationSuccess: (state, { payload }) => {
      state.resPending = false;
      state.userData = payload;
    },
    registrationFail: (state, { payload }) => {
      state.resPending = false;
      state.userData = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { registrationSuccess, registrationFail } = actions;
export default reducer;
