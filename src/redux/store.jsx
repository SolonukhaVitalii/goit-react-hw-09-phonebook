import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';
import { authReducer } from './auth';
import { loadingReducers } from './loading';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    loading: loadingReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const Store = { store, persistor };

export default Store;

