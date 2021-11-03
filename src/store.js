import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './pages/Category/CategorySlice';
import productReducer from './pages/Product/ProductSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
