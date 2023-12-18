import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://openapiv1.coinstats.app/coins';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'AQJPIZGvFxPYf6xkwfOouSBNRhyx+Y7bq5iIp7cD/+c='
  }
};

export const getCurrency = createAsyncThunk(
  'getData',
  async () => {
    try {
      const res = await fetch(apiUrl, options);
      const data = await res.json();
      console.log(data.data);
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
      ...state, isLoading: false, currencyArr: action.payload.data,
    }));
  },
});

export default currencySlice.reducer;
