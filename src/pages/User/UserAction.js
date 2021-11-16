import { createUser } from '../../apis/userAPI';
import { registrationSuccess, registrationFail } from './UserSlice';

export const createUserAction = (userData) => async (dispatch) => {
  const result = await createUser(userData);

  result.status === 'success'
    ? dispatch(registrationSuccess(result))
    : dispatch(registrationFail(result));
};
