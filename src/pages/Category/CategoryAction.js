import { fetchCategory } from '../../apis/categoryAPIs';
import { fetchCategoriesSuccess, reqFail } from './CategorySlice';

export const getCategoriesAction = () => async (dispatch) => {
  const result = await fetchCategory();

  if (result?.status === 'success') {
    return dispatch(fetchCategoriesSuccess(result));
  }
  dispatch(reqFail(result));
};
