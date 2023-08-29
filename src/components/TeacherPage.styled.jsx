import styled from "styled-components";

export const Main = styled.main`
  background-color: #f8f8f8;
  overflow-y: auto;
  max-height: 75vh;
  padding: 30px 16px 95px;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 25px;
  }
`;
