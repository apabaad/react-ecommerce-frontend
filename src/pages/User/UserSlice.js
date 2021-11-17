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
    registrationFail: (state, { payload }) => {
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
export const { registrationSuccess, registrationFail, loginSuccess } = actions;
export default reducer;
