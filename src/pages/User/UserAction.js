import { createUser, userLoginAPI } from '../../apis/userAPI';
import {
  registrationSuccess,
  registrationFail,
  loginSuccess,
} from './UserSlice';

export const createUserAction = (userData) => async (dispatch) => {
  const result = await createUser(userData);

  result.status === 'success'
    ? dispatch(registrationSuccess(result))
    : dispatch(registrationFail(result));
};

export const userLogin = (userInfo) => async (dispatch) => {
  const result = await userLoginAPI(userInfo);
  if (result.status === 'success') {
    return dispatch(loginSuccess(result.result));
  }
};
