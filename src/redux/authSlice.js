import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  authRegister,
  authLogin,
  authLogout,
  fetchCurrentUser,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authRegister.rejected]: handleRejected,
    [authLogin.pending]: handlePending,
    [authLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authLogin.rejected]: handleRejected,
    [authLogout.pending]: handlePending,
    [authLogout.fulfilled](state) {
      state.isLoggedIn = false;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
    [authLogout.rejected]: handleRejected,
    [fetchCurrentUser.pending]: handlePending,
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [fetchCurrentUser.rejected]: handleRejected,
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
