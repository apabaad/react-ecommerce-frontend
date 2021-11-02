import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './pages/Category/CategorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
