import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginUser, refreshToken, registerUser } from "./authOperation";

const initialState = {
  isAuth: false,
  displayName: "",
  idToken: null,
  localId: null,
  email: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        const { email, localId } = payload;
        state.email = email;
        state.localId = localId;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { refreshToken, idToken } = payload;
        state.refreshToken = refreshToken;
        state.idToken = idToken;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.isAuth = true;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
