import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './currency/currencySlice';

export const store = configureStore({
  reducer: {
    currency: currencySlice,
  },
});
