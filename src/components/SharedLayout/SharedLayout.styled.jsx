import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1184px;
  margin: 20px auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 390px;
`;

export const TextLogo = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const Flag = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 25px;
  background: linear-gradient(
    to bottom,
    #338af3 0%,
    #338af3 50%,
    #ffda44 50%,
    #ffda44 100%
  );
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 28px;

  @media screen and (max-width: 1069px) {
    display: none;
  }
`;

export const BurgerMenuButton = styled.button`
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
  @media screen and (min-width: 1070px) {
    display: none;
  }
`;

export const LinkStyled = styled(NavLink)`
  /* display: block; */
  padding: 15px 10px;

  line-height: 1.25;

  /* text-align: center; */

  &.active {
    color: #f4c550;
    border-bottom: 2px solid #f4c550;
  }

  &:hover:not(.active) {
    color: #f4c550;
  }
`;

export const SVG = styled.svg`
  width: 20px;
  height: 20px;
`;

export const USE = styled.use`
  stroke: #f4c550;
`;

export const WrapAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`;

export const WrapLogin = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 15px 0;

  background-color: transparent;
  border: none;
  outline: transparent;

  cursor: pointer;

  &:hover {
    color: #ffdc86;
    stroke: red;
  }

  @media screen and (max-width: 1069px) {
    display: none;
  }
`;

export const ButtonText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
`;

export const ButtonRegister = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 168px;
  height: 48px;
  background: #121417;

  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;

  border-radius: 12px;

  cursor: pointer;

   @media screen and (max-width: 1069px) {
    display: none;
  }
`;
