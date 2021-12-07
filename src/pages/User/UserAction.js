import { createUser, userLoginAPI } from '../../apis/userAPI';
import {
  registrationSuccess,
  loginSuccess,
  resFail,
  logoutSuccess,
} from './UserSlice';

export const createUserAction = (userData) => async (dispatch) => {
  const result = await createUser(userData);

  result.status === 'success'
    ? dispatch(registrationSuccess(result))
    : dispatch(resFail(result));
};

export const userLogin = (userInfo) => async (dispatch) => {
  const result = await userLoginAPI(userInfo);
  if (result.status === 'success') {
    const accessJWT = result.tokens.accessJWT;
    const refreshJWT = result.tokens.refreshJWT;
    window.sessionStorage.setItem('accessJWT', accessJWT);
    window.localStorage.setItem('refreshJWT', refreshJWT);

    return dispatch(loginSuccess(result.result));
  }
  dispatch(resFail(result));
};

export const userLogOut = () => async (dispatch) => {
  dispatch(logoutSuccess());
};
