import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  isLoggedIn: false,
};

const loginFormSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginFormSlice.actions;
export default loginFormSlice.reducer;
