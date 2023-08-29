import { createSlice } from "@reduxjs/toolkit";
import {
  addFavorites,
  getFavorites,
  getTeachers,
  removeFavorites,
} from "./teachersOperation";
import { logout } from "../auth/authSlice";

const initialState = {
  teachers: [],
  favorites: [],
  filter: "All",
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    changeFilterLanguage: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.teachers = payload;
      })
      .addCase(addFavorites.fulfilled, (state, { payload }) => {
        state.favorites.push(payload);
      })
      .addCase(removeFavorites.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.favorites = state.favorites.filter((el) => el.id !== payload);
      })
      .addCase(logout, (state) => {
        state.favorites = [];
        state.filter = "All";
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.favorites = payload;
      });
  },
});

export const { addLike, removeLike, changeFilterLanguage } =
  teachersSlice.actions;
export default teachersSlice.reducer;
