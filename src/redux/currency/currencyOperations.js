import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currencyOperations = createAsyncThunk('/currency', async credentials => {
  try {
    const { data } = await axios('https://cdn.cur.su/api/nbu.json');
    return data;
  } catch {
    return credentials.rejectedWithValue();
  }
});

export default currencyOperations;
