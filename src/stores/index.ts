import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './slices/authSlice';
import rootSaga from './sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'Vend',
  storage: AsyncStorage,
  whitelist: [
    'auth',
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export const persistor = persistStore(store);
saga.run(rootSaga);

setupListeners(store.dispatch);
