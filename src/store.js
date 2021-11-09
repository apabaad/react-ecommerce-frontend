import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './pages/Category/CategorySlice';
import productReducer from './pages/Product/ProductSlice';
import cartReducer from './components/Cart/CartSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
