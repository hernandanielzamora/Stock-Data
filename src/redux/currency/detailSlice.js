import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const apiUrl = 'https://api.coingecko.com/api/v3/coins/';
const apiUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetails = createAsyncThunk(
  'getDetails',
  async (id) => {
    try {
      const res = await axios.get(`${apiUrl}${id}`);
      return res;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  currencyDetails: {},
  isLoading: false,
};

const detailsSlice = createSlice({
  name: 'currencyDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getDetails.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      currencyDetails: action.payload.data.coin,
    }));
  },
});

export default detailsSlice.reducer;
