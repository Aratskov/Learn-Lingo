import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 0;

  background-color: transparent;
  outline: transparent;

  border: none;
  font-size: 40px;

  cursor: pointer;

  &:hover {
    color: #f4c550;
    transform: scale(1.2);
  }
`;

export const BurgerMenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const LinkStyled = styled(NavLink)`
  font-size: 48px;
  line-height: 1.25;

  &.active {
    color: #f4c550;
  }

  &:hover:not(.active) {
    color: #f4c550;
    transform: scale(1.2);
  }
`;
