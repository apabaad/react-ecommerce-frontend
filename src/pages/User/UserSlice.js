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
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    autoLoginSuccess: (state) => {
      state.isLoggedIn = true;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  registrationSuccess,
  resFail,
  loginSuccess,
  logoutSuccess,
  autoLoginSuccess,
} = actions;
export default reducer;
