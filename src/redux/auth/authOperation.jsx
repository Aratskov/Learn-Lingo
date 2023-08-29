import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserApi,
  registerUserApi,
  getUserDataApi,
  refreshTokenAPI,
} from "../../servicesApi/servicesApi";
import { logout } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userCreds, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi(userCreds);
      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCreds, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(userCreds);
      return userData;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "auth/getUserDataApi",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const userData = await getUserDataApi(idToken);
      return userData;
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setTimeout(() => {
          dispatch(refreshToken(getUserData));
        }, 0);
      }
      return rejectWithValue(error.response.data.error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { rejectWithValue, getState, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const tokens = await refreshTokenAPI(refreshToken );
      setTimeout(() => {
          dispatch(cb());
        }, 0);
      return tokens;
    } catch (error) {
      setTimeout(() => {
        dispatch(logout());
      }, 0);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
