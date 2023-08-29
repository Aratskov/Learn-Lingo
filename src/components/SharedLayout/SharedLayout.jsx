import { useDispatch, useSelector } from "react-redux";
import Icons from "../../assets/icons/sprite.svg";
import { logout } from "../../redux/auth/authSlice";
import { isAuthSelect } from "../../redux/auth/authSelect";
import { Container } from "../Container/Container";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import { BiMenu } from "react-icons/bi";
import {
  WrapLogin,
  WrapAuth,
  WrapContainer,
  Logo,
  Flag,
  TextLogo,
  Nav,
  LinkStyled,
  SVG,
  USE,
  ButtonText,
  ButtonRegister,
  BurgerMenuButton,
} from "./SharedLayout.styled";

import { useLocation } from "react-router-dom";
import { MarkupButton } from "../MarkupButton/MarkupButton";
import { useState } from "react";

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector(isAuthSelect);

  const getLoginRoute = () => {
    if (location.pathname.includes("/teachers")) {
      return "/teachers/login";
    }
    return "/login";
  };

  const getRegisterRoute = () => {
    if (location.pathname.includes("/teachers")) {
      return "/teachers/register";
    }
    return "/register";
  };

  return (
    <>
      <header>
        <Container>
          <WrapContainer>
            <Logo>
              <Flag />
              <TextLogo>LearnLingo</TextLogo>
            </Logo>
            <Nav>
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/teachers">Teachers</LinkStyled>
              {isAuth && <LinkStyled to="/favorites">Favorites</LinkStyled>}
            </Nav>
            <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
              <BiMenu />
            </BurgerMenuButton>
            <WrapAuth>
              {isAuth ? (
                <MarkupButton
                  onClick={() => dispatch(logout())}
                  title="logout"
                  width="160px"
                />
              ) : (
                <>
                  <WrapLogin to={getLoginRoute()}>
                    <SVG>
                      <USE href={`${Icons}#icon-log-in`} />
                    </SVG>

                    <ButtonText>Log In</ButtonText>
                  </WrapLogin>
                  <ButtonRegister to={getRegisterRoute()}>
                    Registration
                  </ButtonRegister>
                </>
              )}
            </WrapAuth>
          </WrapContainer>
        </Container>
      </header>
      {isOpen && <BurgerMenu onClick={()=>setIsOpen(false)} />}
    </>
  );
};
