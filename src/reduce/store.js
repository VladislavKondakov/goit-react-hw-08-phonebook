import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

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



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
