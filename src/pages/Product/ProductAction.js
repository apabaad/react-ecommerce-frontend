import { fetchProduct } from '../../apis/productAPI';
import { resPending, fetchProductSuccess, resFail } from './ProductSlice';

export const getProductAction = () => async (dispatch) => {
  const result = await fetchProduct();

  if (result?.status === 'success') {
    return dispatch(fetchProductSuccess(result));
  }
  dispatch(resFail(result));
};
