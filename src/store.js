import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './pages/Category/CategorySlice';
import productReducer from './pages/Product/ProductSlice';
import cartReducer from './components/Cart/CartSlice';
import userReducer from './pages/User/UserSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
