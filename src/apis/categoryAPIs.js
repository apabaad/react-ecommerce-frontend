import axios from 'axios';

const rootURL = 'http://localhost:8000';

const catAPI = rootURL + '/api/v1/category';

export const fetchCategory = async () => {
  try {
    const { data } = await axios.get(catAPI);
    return data;
    console.log(data);
  } catch (error) {
    return error.response.data;
  }
};
