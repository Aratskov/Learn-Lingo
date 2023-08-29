import styled from "styled-components";

export const Wrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 7.47% 8.233% 7.47% 4.88%;

  background-color: #f8f8f8;
  border-radius: 30px;
  @media screen and (min-width: 1070px) {
    max-width: 720px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;

  & span {
    font-style: italic;
    font-weight: 400;

    background-color: #fbe9ba;
    border-radius: 8px;
  }
`;

export const Text = styled.p`
  max-width: 471px;
  margin: 32px 0 64px;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.32px;
`;
