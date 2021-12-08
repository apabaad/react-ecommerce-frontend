import { getNewAccessJWT } from '../../apis/tokenAPI';
import { createUser, getUserAPI, userLoginAPI } from '../../apis/userAPI';
import {
  registrationSuccess,
  loginSuccess,
  resFail,
  logoutSuccess,
  autoLoginSuccess,
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

export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem('accessJWT');
  const refreshJWT = window.localStorage.getItem('refreshJWT');
  console.log(accessJWT, 'access');
  console.log(refreshJWT, 'refresh');

  // auto login if there are both refresh and access JWTs
  if (accessJWT && refreshJWT) {
    return dispatch(autoLoginSuccess());
  }
  if (!accessJWT && refreshJWT) {
    const token = await getNewAccessJWT();
    if (token) {
      const user = await getUserAPI();
      const userData = user.user;

      dispatch(loginSuccess(userData));
      return dispatch(autoLoginSuccess());
    }
  }
  dispatch(logoutSuccess());
};

export const userLogOut = () => async (dispatch) => {
  dispatch(logoutSuccess());
};
