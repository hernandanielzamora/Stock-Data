import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD';

export const getCurrency = createAsyncThunk(
  'getData',
  async () => {
    try {
      const res = axios.get(apiUrl);
      return res;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  currencyArr: [],
  isLoading: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrency.pending, (state) => ({
      ...state, isLoading: true,
    }));

    builder.addCase(getCurrency.fulfilled, (state, action) => ({
      ...state, isLoading: false, currencyArr: action.payload.data.coins,
    }));
  },
});

export default currencySlice.reducer;
