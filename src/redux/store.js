import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import detailsReducer from './currency/detailSlice';

const reducer = combineReducers({
  currency: currencyReducer,
  detils: detailsReducer,
});

const store = configureStore({ reducer });

export default store;
