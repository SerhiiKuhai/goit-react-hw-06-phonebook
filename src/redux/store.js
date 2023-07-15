import { contactsReducer } from './phonebook/slice';
import { filtersContactReducer } from './filtersContac/slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

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

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filtersContact: filtersContactReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filtersContact'],
};

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
