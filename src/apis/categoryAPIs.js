import axios from 'axios';

const rootURL = 'http://localhost:8000';

const catAPI = rootURL + '/api/v1/category';

export const fetchCategory = async () => {
  try {
    // const response = await axios.get(catAPI);
    // return response?.data;

    // OR

    const { data } = await axios.get(catAPI);
    return data;
  } catch (error) {
    return (
      error.response?.data || {
        status: 'error',
        message: error.message,
      }
    );
  }
};
