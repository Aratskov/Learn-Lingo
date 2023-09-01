import styled from "styled-components";

export const Button = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  height: 60px;

  background-color: #f4c550;
  border: none;
  border-radius: 12px;
  outline: transparent;

  color: #121417;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    background-color: #ffdc86;
  }

  /* @media screen and (max-width: 1070px) {
    display: none;
  } */
`;
