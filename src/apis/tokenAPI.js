import axios from 'axios';

const rootURL = 'http://localhost:8000';
const tokenAPI = rootURL + '/api/v1/token';

export const getNewAccessJWT = async () => {
  try {
    // remove old token
    window.sessionStorage.removeItem('accessJWT');

    const { data } = await axios.get(tokenAPI, {
      headers: {
        Authorization: window.localStorage.getItem('refreshJWT'),
      },
    });
    data && window.sessionStorage.setItem('accessJWT', data.accessJWT);
    return window.sessionStorage.getItem('accessJWT');
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message, //gets error generated by the system
    };
  }
};
