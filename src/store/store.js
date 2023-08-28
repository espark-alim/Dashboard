// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import collapse from './slices/collapse';


const store = configureStore({
  reducer: {
    auth: authReducer,
    Collapse: collapse,
  },
});

export default store;
