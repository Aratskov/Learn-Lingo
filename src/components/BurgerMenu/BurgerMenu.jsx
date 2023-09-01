import { useDispatch, useSelector } from "react-redux";
import { BiX } from "react-icons/bi";

import {
  BurgerMenuContainer,
  BurgerMenuList,
  Nav,
  LinkStyled,
  CloseButton,
} from "./BurgerMenu.styled";
import { createPortal } from "react-dom";

import { isAuthSelect } from "../../redux/auth/authSelect";
import { logout } from "../../redux/auth/authSlice";

const modalRoot = document.querySelector("#modal-auth-root");

export const BurgerMenu = ({ onClick }) => {
  const isAuth = useSelector(isAuthSelect);
  const dispatch = useDispatch();

  return createPortal(
    <BurgerMenuContainer>
      <CloseButton onClick={onClick}><BiX/></CloseButton>
      <BurgerMenuList>
        <Nav>
          <LinkStyled to="/" onClick={onClick}>
            Home
          </LinkStyled>
          <LinkStyled to="/teachers" onClick={onClick}>
            Teachers
          </LinkStyled>
          {isAuth && <LinkStyled to="/favorites">Favorites</LinkStyled>}
        </Nav>
        <div>
           {isAuth ? (
          <button onClick={() => dispatch(logout())}>LogOut</button>
        ) : (
            <>
              <button>Login</button>
              <button>Register</button>

            {/* <WrapLogin to={getLoginRoute()}>
                    <SVG>
                      <USE href={`${Icons}#icon-log-in`} />
                    </SVG>

                    <ButtonText>Log In</ButtonText>
                  </WrapLogin>
                  <ButtonRegister to={getRegisterRoute()}>
                    Registration
                  </ButtonRegister> */}
          </>
        )}
       </div>
      </BurgerMenuList>
    </BurgerMenuContainer>,
    modalRoot
  );
};
