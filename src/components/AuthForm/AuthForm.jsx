import { useFormik } from "formik";
import {
  validationSchemaLogin,
  validationSchemaRegister,
} from "../SchemaValidation/SchemaValidation";
import { BackdropModal } from "../BackdropModal/BackdropModal";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  CloseButton,
  Title,
  SecondText,
  Form,
  Input,
  Button,
  TextError,
  ToggleBtn,
} from "./AuthForm.styled";
import Icon from "../../assets/icons/close.svg";
import { loginUser, registerUser } from "../../redux/auth/authOperation";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const AuthForm = ({ isRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
    },
    validationSchema: isRegister
      ? validationSchemaRegister
      : validationSchemaLogin,
    onSubmit: (values) => {
      isRegister ? dispatch(registerUser(values)) : dispatch(loginUser(values));
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BackdropModal closeModal={() => navigate(-1)}>
      <Modal>
        <CloseButton onClick={() => navigate(-1)}>
          <svg width="32" height="32">
            <use href={`${Icon}#icon-close`} />
          </svg>
        </CloseButton>
        <Title>{isRegister ? "Registration" : "Log In"}</Title>
        <SecondText>
          {isRegister
            ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            : "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}
        </SecondText>
        <form onSubmit={formik.handleSubmit}>
          <Form>
            {isRegister && (
              <label htmlFor="userName">
                <Input
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  placeholder="Name"
                />
                {formik.touched.userName && formik.errors.userName && (
                  <TextError>{formik.errors.userName}</TextError>
                )}
              </label>
            )}
            <label htmlFor="email">
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <TextError>{formik.errors.email}</TextError>
              )}
            </label>

            <label htmlFor="password" style={{ position: "relative" }}>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
              <ToggleBtn onClick={togglePassword} />

              {formik.touched.password && formik.errors.password && (
                <TextError>{formik.errors.password}</TextError>
              )}
            </label>
          </Form>
          <Button type="submit">{isRegister ? "Sign Up" : "Log In"} </Button>
        </form>
      </Modal>
    </BackdropModal>
  );
};
