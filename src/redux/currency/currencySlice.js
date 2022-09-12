import { createSlice } from '@reduxjs/toolkit';
import currencyOperations from './currencyOperations';

const initialState = {
  baseCurrency: null,
  rates: {},
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: {
    [currencyOperations.fulfilled](state, action) {
      state.baseCurrency = action.payload.base;
      state.rates = action.payload.rates;
      console.log(action.payload);
    },
  },
});

export default currencySlice.reducer;
