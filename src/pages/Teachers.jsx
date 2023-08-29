import { useEffect } from "react";
import { TeacherPage } from "../components/TeacherPage";
import { useDispatch } from "react-redux";
import { getTeachers } from "../redux/teachers/teachersOperation";
import { Outlet } from "react-router-dom";

export const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  return (
    <>
      <TeacherPage />
      <Outlet />
    </>
  );
};
