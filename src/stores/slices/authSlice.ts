import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, LogInPayload } from '../types/authTypes';

const initialState = {
  isUserLogged: false,
};

const reducers = {
  logIn: (state: AuthState, action: LogInPayload) => void 0,
  setIsUserLogged: (state: AuthState, action: PayloadAction<boolean>) => {
    state.isUserLogged = action.payload;
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export default authSlice.actions;

export const authReducer = authSlice.reducer;
