import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetails = createAsyncThunk(
  'getDetails',
  async (id) => {
    try {
      const res = await fetch(`${apiUrl}${id}`);
      const data = await res.json();
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
      currencyDetails: action.payload.coin,
    }));
  },
});

export default detailsSlice.reducer;
