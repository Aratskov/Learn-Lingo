import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 566px;
  padding: 64px;

  background: #fff;
  border-radius: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  & svg use {
    stroke: #121417;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg use {
    stroke: #ffdc86;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const SecondText = styled.p`
  color: rgba(18, 20, 23, 0.8);
  margin: 20px 0 40px;
  font-size: 16px;
  line-height: 1.38;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  padding: 16px 18px;

  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: transparent;

  color: #121417;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.38;

  cursor: pointer;

  &::placeholder {
    color: #121417;
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 40px;

  background-color: #f4c550;

  border-radius: 12px;
  border: none;

  color: #121417;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffdc86;
  }
`;

export const TextError = styled.p`
  position: absolute;
  color: red;
  font-size: 10px;
`;

export const ToggleBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  background-color: green;

  cursor: pointer;
`;
