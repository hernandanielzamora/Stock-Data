import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://openapiv1.coinstats.app/coins/';

export const getDetails = createAsyncThunk(
  'getDetails',
  async (id) => {
    try {
      const res = await axios.get(`${apiUrl}${id}`, {
        headers: {
          'x-api-key': 'AQJPIZGvFxPYf6xkwfOouSBNRhyx+Y7bq5iIp7cD/+c=',
        },
      });
      const data = await res.data;
      console.log(data);
      return data;
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
      currencyDetails: action.payload,
    }));
  },
});

export default detailsSlice.reducer;
