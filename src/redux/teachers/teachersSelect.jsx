import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state) => state.teachers.teachers;
export const selectFilter = (state) => state.teachers.filter;
export const selectFavorites = (state) => state.teachers.favorites;

export const selectUniqueLanguage = createSelector(
  [selectTeachers],
  (teachers) => {
    const arr = teachers.flatMap(({ languages }) => languages);
    const uniqueLanguage = ["All", ...new Set(arr)];
    return uniqueLanguage;
  }
);

export const selectFilterTeachers = createSelector(
  [selectTeachers, selectFilter],
  (teachers, filter) => {
    if (filter === "All") return teachers;
    return teachers.filter(({ languages }) => languages.includes(filter));
  }
);
