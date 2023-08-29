import { Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import "./App.css";

import { Home } from "./pages/Home";
import { AuthForm } from "./components/AuthForm/AuthForm";
import { TeachersPage } from "./pages/Teachers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "./redux/auth/authOperation";
import { Favorites } from "./pages/Favorites";
import { isAuthSelect } from "./redux/auth/authSelect";

const PrivateRoute = ({ component,redirectTo="/" }) => {
  const isAuth = useSelector(isAuthSelect)
  
  return isAuth ? component : <Navigate to={redirectTo}/>
}

const PublicRoute = ({ component,redirectTo="/" }) => {
  const isAuth = useSelector(isAuthSelect)
  
  return !isAuth ? component : <Navigate to={redirectTo}/>
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<PublicRoute component={<AuthForm />}/>} />
          <Route path="register" element={<PublicRoute component={<AuthForm isRegister={true} />}/>} />
        </Route>
        <Route path="/teachers" element={<TeachersPage />}>
          <Route path="login" element={<PublicRoute component={<AuthForm />}/>} />
          <Route path="register" element={<PublicRoute component={<AuthForm isRegister={true} />}/>} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute component={<Favorites />}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

