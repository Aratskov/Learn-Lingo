import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavoritesAPI, getFavoritesAPI, getTeachersApi, removeFavoriteApi } from "../../servicesApi/servicesApi";

export const getTeachers = createAsyncThunk(
  "teacher/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTeachersApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const addFavorites = createAsyncThunk(
  "teacher/addFavorites",
  async (favorite, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await addFavoritesAPI({ favorite, localId, idToken });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const removeFavorites = createAsyncThunk(
  "teacher/remove",
  async (id, { rejectWithValue, getState }) => {
    const { idToken, localId } = getState().auth;
    try {
      await removeFavoriteApi({ id, localId, idToken });
      return id;
    } catch (error) {
      
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "teacher/getFavorites",
  async (_, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getFavoritesAPI({localId, idToken });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
