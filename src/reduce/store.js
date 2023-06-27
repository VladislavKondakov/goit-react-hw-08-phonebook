import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';
import authSlice from './auth-slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: authSlice,
// });

const persistConfig = {
  key: 'root',
  storage,
  serialize: (state) => JSON.stringify(state),
  deserialize: (state) => {
    const parsedState = JSON.parse(state);
    if (parsedState && Array.isArray(parsedState.contacts)) {
      return parsedState.contacts;
    }
    return [];
  },
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducerWithPersist = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducerWithPersist);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
