import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import themeReducer from './themeSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;