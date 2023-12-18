import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://openapiv1.coinstats.app/coins?limit=300&currency=USD';

export const getCurrency = createAsyncThunk(
  'getData',
  async () => {
    try {
      const res = await axios.get(apiUrl, {
        headers: {
          'x-api-key': 'AQJPIZGvFxPYf6xkwfOouSBNRhyx+Y7bq5iIp7cD/+c=',
        },
      });
      const data = await res.data;
      console.log(data.result);
      return data;
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
      ...state, isLoading: false, currencyArr: action.payload.result,
    }));
  },
});

export default currencySlice.reducer;
