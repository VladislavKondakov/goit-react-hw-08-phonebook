import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut ,currentUser} from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.pending](state) {
      state.isRefreshing = true
    },
    [currentUser.rejected](state) {
      state.isRefreshing = false
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoggedIn = true
      state.isRefreshing = false
    }
  },
});


export default authSlice.reducer;
