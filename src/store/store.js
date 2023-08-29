// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import collapse from './slices/collapse';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducers = combineReducers({
  auth: authReducer,
  Collapse: collapse,
})
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

