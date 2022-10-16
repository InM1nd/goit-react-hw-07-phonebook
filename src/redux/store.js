import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from '../serviceAPI/contactsAPI';
import { filterSlice } from 'serviceAPI/filterSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterSlice.name]: filterSlice.reducer
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware().concat(contactApi.middleware),
  ],
});