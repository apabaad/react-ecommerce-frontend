import axios from 'axios';

const rootURl = 'http://localhost:8000';
const userAPI = `${rootURl}/api/v1/user`;

export const createUser = async (userInfo) => {
  try {
    const { data } = await axios.post(userAPI, userInfo);
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const userLoginAPI = async (userInfo) => {
  try {
    const { data } = await axios.post(`${userAPI}/login`, userInfo);
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const getUserAPI = async () => {
  try {
    const { data } = await axios.get(`${userAPI}/getuser`, {
      headers: {
        Authorization: window.sessionStorage.getItem('accessJWT'),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};
