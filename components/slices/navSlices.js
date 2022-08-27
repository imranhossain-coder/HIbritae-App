import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: "home",
  navState: null,
  UserToken: null,
  user: null,
  loginstatus: null,
};

export const navslice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setnavState: (state, action) => {
      state.navState = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserToken: (state, action) => {
      state.UserToken = action.payload;
    },
    setloginstatus: (state, action) => {
      state.loginstatus = action.payload;
    },
  },
});

export const { setOrigin, setnavState, setUser, setUserToken, setloginstatus } =
  navslice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectnavState = (state) => state.nav.navState;
export const selectuser = (state) => state.nav.user;
export const selectUserToken = (state) => state.nav.UserToken;
export const selectloginstatus = (state) => state.nav.loginstatus;

export default navslice.reducer;
