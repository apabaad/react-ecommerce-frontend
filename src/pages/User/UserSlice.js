import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resPending: true,
  isLoggedIn: false,
  userData: {},
  user: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    registrationSuccess: (state, { payload }) => {
      state.resPending = false;
      state.userData = payload;
    },
    resFail: (state, { payload }) => {
      state.resPending = false;
      state.userData = payload;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { registrationSuccess, resFail, loginSuccess } = actions;
export default reducer;
